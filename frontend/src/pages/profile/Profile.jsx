import "./Profile.css";
import Image from "../../assets/event-banner.jpg";
import { CiCamera } from "react-icons/ci";

const Profile = () => {
  const profileInfo = [
    { name: "Full Name", value: "Allan Njoroge" },
    { name: "Phone Number", value: "+254700056642" },
    { name: "Email Address", value: "allan@gmail.com" },
    { name: "Gender", value: "Male" },
    { name: "Country", value: "Kenya" },
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
          <div className="profile-text-section">
            {profileInfo.map((item, index) => (
              <h3 key={index} className="h3">
                {item.name}: <span>{item.value}</span>
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
