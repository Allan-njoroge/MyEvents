import "./Profile.css";
import Image from "../../assets/event-banner.jpg";
import { CiCamera } from "react-icons/ci";

const Profile = () => {
  const profileInfo = [
    { name: "First Name", value: "Allan" },
    { name: "Last Name", value: "Njoroge" },
    { name: "Email Address", value: "allan@gmail.com" },
    { name: "Country", value: "Kenya" },
    { name: "Phone Number", value: "+254700056642" },
    { name: "Gender", value: "Male" },
  ];

  return (
    <div className="section profile-section">
      <div className="section-div">
        <h1>Your Profile</h1>
        <div className="info-section">
          <div>
            <div className="profile-img-container">
              <img src={Image} alt="profile picture" className="profile-img" />
              <div className="profile-img-icon">
                <CiCamera className="cam-icon" />
              </div>
            </div>
          </div>
          {/*--text info section*/}
          <form className="profile-text-section">
            {profileInfo.map((item, index) => (
              <div className="single-input">
                <label htmlFor='' className='input-label'>{item.name}</label>
                <input type="text" value={item.value} className="profile-input" />
              </div>
            ))}
            <div className="sbt-btn-container">
              <button type="submit" className="pry-btn sbt-btn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
