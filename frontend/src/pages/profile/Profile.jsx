import "./Profile.css";
import Image from "../../assets/event-banner.jpg";
import { CiCamera } from "react-icons/ci";
import { useState, useEffect } from "react";
import axios from 'axios'

const Profile = () => {
  // State variables to hold user data and error message
  const [profileInfo, setProfileInfo] = useState({
    user: {
      id: '',
    },
    firstName: '',
    secondName: '',
    emailAddress: '',
    phoneNumber: '',
  });
  const [error, setError] = useState('');

  // Fetch user data from local storage and set it to state on component mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setProfileInfo({
        user: {
          id: user.id,
        },
        firstName: user.first_name,
        secondName: user.second_name,
        emailAddress: user.email_address,
        phoneNumber: user.phone_number,
      });
    }
  }, []);

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission and update user profile
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/users/update`, profileInfo);
      setError("Profile has been updated successfully");
    } catch (err) {
      setError(err.message);
    }
  };

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
          <form className="profile-text-section" onSubmit={updateUser}>
            <div className="single-input">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" className="profile-input" value={profileInfo.firstName} onChange={handleInputChange} />
            </div>
            <div className="single-input">
              <label htmlFor="secondName">Second Name</label>
              <input type="text" name="secondName" id="secondName" className="profile-input" value={profileInfo.secondName} onChange={handleInputChange} />
            </div>
            <div className="single-input">
              <label htmlFor="emailAddress">Email Address</label>
              <input type="text" name="emailAddress" id="emailAddress" className="profile-input" value={profileInfo.emailAddress} onChange={handleInputChange} />
            </div>
            <div className="single-input">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="text" name="phoneNumber" id="phoneNumber" className="profile-input" value={profileInfo.phoneNumber} onChange={handleInputChange} />
            </div>
            <div className="sbt-btn-container">
              <button type="submit" className="pry-btn sbt-btn">Update</button>
            </div>
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
