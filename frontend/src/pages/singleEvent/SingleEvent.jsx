import "./SingleEvent.css";
import Image from "../../assets/event-banner.jpg";
import { FaCalendarAlt, FaClock, FaTicketAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const SingleEvent = () => {
  return (
    <div class="event-main-section">
      <div className="section-div">
        <img src={Image} alt="" className="event-banner" />

        <div className="event-details-section">
          <div className="details-text-section">
            <h1 className="event--title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              labore.
            </h1>
            <p className="event-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              alias explicabo sit exercitationem ullam amet quae culpa.
              Dignissimos sint incidunt ea tempore quod odio maiores eaque vero.
              Quibusdam cumque eaque eius veritatis sunt est doloribus odio quos
              placeat consequatur harum rerum molestias, corrupti illum aliquid
              hic, iusto sapiente! Recusandae commodi explicabo ad alias tempora
              vitae harum fuga esse in doloribus? Fugiat deserunt vitae maiores
              ad illo? Deleniti nam molestias debitis tenetur est blanditiis,
              officiis a repellendus. Incidunt iusto animi velit nisi neque
              repellat possimus totam. Recusandae, quae qui sapiente, veniam
              odit fugiat perferendis consequuntur id aliquid exercitationem
              aperiam quam quas similique soluta harum perspiciatis ut quaerat!
              Aliquid quidem magnam excepturi quos sit, aperiam rerum recusandae
              eligendi, blanditiis asperiores quam doloremque hic minima
              reprehenderit, ipsa ipsam culpa quo. Qui mollitia, quas libero
              laborum harum quia alias beatae velit error fugiat maiores ducimus
              minus molestias exercitationem magnam magni nemo assumenda sunt
              id.
            </p>
          </div>

          {/*--event date, time, location and price--*/}
          <div className='extra-details'>
            <div className="details-wrapper-event">
              <p className="_details">
                <FaCalendarAlt className="event--icon" /> December 20th 2024
              </p>
              <p className="_details">
                <FaClock className="event--icon" /> 8:00AM - 5:00PM
              </p>
              <p className="_details">
                <FaLocationDot className="event--icon" /> Nairobi, CBD
              </p>
              <p className="_details">
                <FaTicketAlt className="event--icon" /> Ksh 1000
              </p>
              <button className="pry-btn ticket-btn">Get Ticket</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
