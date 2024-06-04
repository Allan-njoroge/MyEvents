import "./Home.css";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
// import EventsData from '../../mockData/events.json'
import Image from '../../assets/ME.png'
import axios from 'axios'
import { useEffect, useState } from "react";

const Home = () => {
  // const events = EventsData
  const [events, setEvents] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    document.title = "Home - MyEvents"

    const fetchEvents = async () => {
      try{
        const res = await axios.get('http://localhost:8000/api/events/');
        setEvents(res.data)
      } catch (err){
        console.log(events)
      }
    }
    fetchEvents()
  }, [])

  // function to search for an event
  const searchEvent = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/events/title/${title}`)
      setEvents(res.data)
      console.log(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  const setInputValue = (e) => {
    setTitle(e.target.value)
  }

  return (
    <>
      {/*--Hero Section*/}
      <section className="section header-section">
        <div className="section-div">
          <h1>Get A Chance To Create And Attend Events Using MyEvents</h1>
        </div>
      </section>
      {/*--Search Section--*/}
      <section className="search-section">
        <div className="section-div">
          <input type="text" placeholder="Search Event" id="search-input" value={title} onChange={setInputValue} />
          <button className="pry-btn search-btn" onClick={searchEvent}>Search</button>
        </div>
      </section>
      {/*--Events Card Section--*/}
      <section className="events-section">
        <div className="events-wrapper">
          {events && events.map((item, index) => (
            <Card 
              key={index}
              id={item.id}
              title={item.title} 
              date={item.date}
              description={item.description} 
              price={item.price}
              location={item.location}
              startTime={item.start_time}
              endTime={item.end_time}
            />
          ))}
        </div>
      </section>
      {/*--Footer Section--*/}
      <Footer />
    </>
  );
};

export default Home;
