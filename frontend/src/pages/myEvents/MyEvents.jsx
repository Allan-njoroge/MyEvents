import { useState } from 'react'
import Card from "../../components/Card/Card";
import "./MyEvents.css";
import { RiDeleteBinFill } from "react-icons/ri";
import useFetch from '../../Hooks/useFetch'

const MyEvents = () => {

  const { data, laoding, error } = useFetch("/events")
  
  console.log(data)

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
