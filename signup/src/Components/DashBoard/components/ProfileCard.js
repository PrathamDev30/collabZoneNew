import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfileCard.css";
import userImage from "../components/user.jpg";  // Adjust the path as needed

const ProfileCard = ({ userData, onClose }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [userData]);

  // Handle Logout
  const handleLogout = () => {
    alert("Logout successfully");
    setUser(null); // Clear user data
    onClose(); // Hide profile card
  };

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          src={userImage}
          alt="Profile"
          className="profile-pic"
        />
        <div className="user-info">
          <h5>Hi, {user.name}</h5>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Aadhaar Card:</strong> {user.aadhaar || "Not available"}
          </p>
        </div>
      </div>
      <button className="btn btn-sm logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default ProfileCard;
