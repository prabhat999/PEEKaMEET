import React from "react";
import "./ProfileBody.css";
import { useState } from "react";

import ShowNotes from "../../Notes/ShowNotes";
import ProfileDetails from "./ProfileDetails";

function ProfileBody() {
  const [toggle, settoggle] = useState(true);
  const notesHandler = () => {
    settoggle(!toggle);
  };
  const detailsHandler = () => {
    settoggle(!toggle);
  };

  return (
    <div className="profilebodymain">
      <div className="profilebodymaincontent">
        <div className="profilebodymaincontentdisplay">
          <img
            id="dp"
            src="https://media.gq.com/photos/56e853e7161e63486d04d6c8/4:3/w_1600,h_1200,c_limit/david-beckham-gq-0416-2.jpg"
            alt=""
          />
          <div className="container info">
            <div id="name">David Beckham</div>
            <div id="ceo">CEO</div>
            <div id="brands">Gold Brands</div>
          </div>
        </div>
        <div className="btnarea row">
          <div className="col pqrs">
            <button className="msg">
              <i className="fas fa-comments"></i>
              Message
            </button>
            <button className="msg">
              <i className="fas fa-user-friends"></i>
              Save Contacts
            </button>
          </div>
        </div>
        <div className="togglebar row">
          <div className="col-2">
            <button onClick={detailsHandler} className="togglebtns">
              Details
            </button>
          </div>
          <div className="col-2">
            <button onClick={notesHandler} className="togglebtns">
              Notes
            </button>
          </div>
        </div>
        {toggle ? <ProfileDetails /> : <ShowNotes />}
      </div>
    </div>
  );
}

export default ProfileBody;
