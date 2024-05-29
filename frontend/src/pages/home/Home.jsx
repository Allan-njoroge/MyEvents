import "./Home.css";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import EventsData from '../../mockData/events.json'
import Image from '../../assets/ME.png'

const Home = () => {

  const events = EventsData

  return (
    <>
      {/*--Hero Section*/}
      <section className="section header-section">
        <div className="section-div">
          <h1>Get A Chance To Create And Attend Events Using MyEvents</h1>
        </div>
      </section>
      {/*--Search Section--*/}
      <section class="search-section">
        <div class="section-div">
          <input type="text" placeholder="Search Event" id="seacrh-input" />
          <button class="pry-btn search-btn">Search</button>
        </div>
      </section>
      {/*--Events Card Section--*/}
      <section className="events-section">
        <div className="events-wrapper">
          {events.map((item, index) => (
            <Card 
              key={index} 
              title={item.title} 
              date={item.date}
              description={item.description} 
              price={item.price}
              location={item.location}
              startTime={item.startTime}
              endTime={item.endTime}
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
