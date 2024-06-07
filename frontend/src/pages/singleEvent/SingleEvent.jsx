import { useParams } from "react-router-dom";
import "./SingleEvent.css";
import Image from "../../assets/event-banner.jpg";
import { FaCalendarAlt, FaClock, FaTicketAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from 'axios'

const SingleEvent = () => {
  const { id } = useParams()
  const eventId = parseInt(id, 10);
  // const event = EventsData.find(event => event.id === eventId)
  const [event, setEvent] = useState({})
  const [inputs, setInputs] = useState({
    firstName: "",
    secondName: "",
    emailAddress: "",
    phoneNumber: "",
  })
  const [message, setMessage] = useState("")

  // load the event details when the page opens
  useEffect(() => {
    const fetchEvent = async () => {
      try{
        const res = await axios.get(`http://localhost:8000/api/events/id/${eventId}`)
        setEvent(res.data)
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchEvent()
  }, [eventId])

  const handleChange = (e) => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  // function to generate ticket for the event
  const getTicket = async (e) => {
    try {
      e.preventDefault()
      // generate ticket for the event
      await axios.post(`http://localhost:8000/api/tickets/rsvp/${eventId}`, inputs)
      setMessage("Event successfully booked, check email")
    }
    catch (err) {
      if(err.response && err.response.status === 400) {
        setMessage("You have already reserved this event")
      }
      else {
        setMessage("An error occured please try again later")
      }
    }
  }

  return (
    <div className="event-main-section">
      <div className="section-div">
        <img src={Image} alt="" className="event-banner" />

        <div className="event-details-section">
          <div className="details-text-section">
            <h1 className="event--title">{event.title}</h1>
            <p className="event-description">{event.description}</p>
          </div>

          <div className='extra-details'>
            <div className="details-wrapper-event">
              <p className="_details"><FaCalendarAlt className="event--icon" /> {event.date}</p>
              <p className="_details"><FaClock className="event--icon" /> {event.start_time}- {event.end_time}</p>
              <p className="_details"><FaLocationDot className="event--icon" /> {event.location}</p>
              <p className="_details"><FaTicketAlt className="event--icon" /> Ksh {event.price}</p>
              <form action="" className="booking-form">
                <input type="text" placeholder="First Name" name="firstName" required onChange={handleChange} />
                <input type="text" placeholder="Second Name" name="secondName" required onChange={handleChange} />
                <input type="text" placeholder="Email Address" name="emailAddress" required onChange={handleChange} />
                <input type="text" placeholder="Phone Number" name="phoneNumber" required onChange={handleChange} />
                <button type="submit" className="pry-btn ticket-btn" onClick={getTicket}>RSVP</button>
              </form>
              { message && <p>{ message }</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
