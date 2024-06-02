import { useParams } from "react-router-dom";
import "./SingleEvent.css";
import Image from "../../assets/event-banner.jpg";
import { FaCalendarAlt, FaClock, FaTicketAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import EventsData from '../../mockData/events.json'

const SingleEvent = () => {
  const { id } = useParams()
  const eventId = parseInt(id, 10);
  const event = EventsData.find(event => event.id === eventId)

  const getTicket = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user, event)
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
              <p className="_details"><FaClock className="event--icon" /> {event.startTime}- {event.endTime}</p>
              <p className="_details"><FaLocationDot className="event--icon" /> {event.location}</p>
              <p className="_details"><FaTicketAlt className="event--icon" /> Ksh {event.price}</p>
              <button className="pry-btn ticket-btn" onClick={getTicket}>Get Ticket</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
