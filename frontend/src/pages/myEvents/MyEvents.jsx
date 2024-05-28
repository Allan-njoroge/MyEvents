import { useState } from 'react'
import Card from "../../components/Card/Card";
import "./MyEvents.css";
import { RiDeleteBinFill } from "react-icons/ri";

const MyEvents = () => {
  return (
    <div className="section myevents-section">
      <div className="section-div">
        {/*--Event Cards--*/}
        <div className="events-section">
          <div className="events-wrapper">
            {/*--card wrapper--*/}
            <div className="card-wrapper">
              <Card />
              <RiDeleteBinFill className='icon pry-btn' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEvents;
