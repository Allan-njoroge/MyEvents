import React from "react";
import "./CreateEvent.css";
import Footer from "../../components/Footer/Footer";

const CreateEvent = () => {
  return (
    <>
      <div className="section">
        <div className="section-div">
          <h1>Create Your Event Here</h1>
          <h4>Add event details to let the attendees know what to expect.</h4>

          <form action="">
            {/*--Image Input--*/}
            <div className="event-image">
              <label for="">Event Banner</label>
              <input type="file" className="img-input" required />
            </div>
            {/*--Title Input--*/}
            <div className="event-title">
              <label for="">Event Title</label>
              <p class="title-desc">Be clear and precise about the event</p>
              <input type="text" className="title-input" required />
            </div>
            {/*--Description Input--*/}
            <div class="event-desc">
              <label for="">Description</label>
              <p class="title-desc">
                Tell the people what the event is about and the necessary
                details they need to know. (150 characters max)
              </p>
              <textarea name="" required maxlength="150" className="desc-input"></textarea>
            </div>
            {/*--date-and-time--*/}
            <div className="date-and-time">
              <label for="">Date and time</label>
              <input type="date" required />
              <input type="text" required placeholder="Start time" className="start-time-input" />
              <input type="text" required placeholder="End time" className="end-time-input" />
            </div>
            {/*--location--*/}
            {/* <div className="date-and-time">
              <label for="">Date and time</label>
              <input type="date" required />
              <input type="text" required placeholder="Start time" className="start-time-input" />
              <input type="text" required placeholder="End time" className="end-time-input" />
            </div> */}
            {/*--Price Input--*/}
            <div className="location">
              <label for="">Price</label>
              <input type="number" placeholder="Price" required className="price-input" />
            </div>
            {/*--Attendees Expected Input--*/}
            <div className="location">
              <label for="">Number of Attendees</label>
              <input type="number" placeholder="Number of attendees" required className="attendees-input" />
            </div>
            {/*--Submit Button--*/}
            <button className="pry-btn submit-btn">Create Event</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
