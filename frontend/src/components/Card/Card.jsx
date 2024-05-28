import './Card.css'
import Image from '../../assets/ME.png'
import { Link } from 'react-router-dom'
import { FaCalendarAlt, FaClock, FaTicketAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Card = ({ image, title, date, startTime, endTime, location, price }) => {
  return (
    <div className='event-card'>
        <img src={Image} alt="" className='event-img' />
        <div className='event-details'>
            <h3 className="event-title">
                <Link>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem reiciendis, quaerat magnam accusantium dolorum voluptatum est tempore quo eveniet!</Link>
            </h3>
            {/*--event date, time, location and price--*/}
            <div className='details-wrapper'>
                <p className='details'> <FaCalendarAlt className='event-icon' /> December 20th 2024</p>
                <p className='details'> <FaClock className="event-icon" /> 8:00AM - 5:00PM</p>
                <p className='details'> <FaLocationDot className='event-icon' /> Nairobi, CBD</p>
                <p className='details'> <FaTicketAlt className='event-icon' /> Ksh 1000</p>
            </div>
        </div>
    </div>
  )
}

export default Card