import './Card.css'
import Image from '../../assets/ME.png'
import { Link } from 'react-router-dom'
import { FaCalendarAlt, FaClock, FaTicketAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Card = ({ image, title, date, startTime, endTime, location, price, id }) => {
  return (
    <div className='event-card'>
        <img src={Image} alt="" className='event-img' />
        <div className='event-details'>
            <h3 className="event-title">
                <Link to={`/${id}`}>{title}</Link>
            </h3>
            {/*--event date, time, location and price--*/}
            <div className='details-wrapper'>
                <p className='details'> <FaCalendarAlt className='event-icon' /> {date}</p>
                <p className='details'> <FaClock className="event-icon" /> {startTime} - {endTime}</p>
                <p className='details'> <FaLocationDot className='event-icon' /> {location}</p>
                <p className='details'> <FaTicketAlt className='event-icon' /> Ksh {price}</p>
            </div>
        </div>
    </div>
  )
}

export default Card