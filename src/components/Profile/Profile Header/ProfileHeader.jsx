import React from "react";
import { useNavigate } from "react-router";
import "./ProfileHeader.css";

function ProfileHeader() {
  const navigate = useNavigate();
  const signoutHandler = () => {
    navigate("/");
  };
  return (
    <div className="profileheader_main row align-items-center">
      <div className="col text-start profilelogo">
        <div className="logo">
          <img
            src="https://peekameet.com/images/icons/header_logo.png"
            alt=""
          />
          <span>PEEKaMEET</span>
          <ul className="profileheader-list">
            <li>
              <i className="fas fa-home"></i>
            </li>

            <li id="home">Home</li>

            <li>
              <i className="fas fa-user-friends"></i>
            </li>
            <li>Contacts</li>
            <li>
              <i className="fas fa-envelope"></i>
            </li>
            <li>Messages</li>
            <li>
              <i className="fas fa-qrcode"></i>
            </li>
            <li>Scan</li>
            <li>
              <i className="fas fa-cogs"></i>
            </li>
            <li>The Movement</li>
            <li>
              <i className="fas fa-bell"></i>
            </li>
            <li>Notifications</li>

            <li>
              <i className="fas fa-align-justify"></i>
            </li>
          </ul>
          <button
            className="btn btn-light signout-btn"
            onClick={signoutHandler}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
