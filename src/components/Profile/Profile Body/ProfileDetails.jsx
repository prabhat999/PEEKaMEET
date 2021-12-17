import React from "react";
import "./ProfileDetails.css";

function ProfileDetails() {
  return (
    <div className="profiledetails">
      <div className="container quote">
        <i className="fas fa-quote-left fa-2x quotecontent"></i>
        <span>
          <b>Inspired by the world and everything it has to offer.</b>
        </span>
        <i className="fas fa-quote-right fa-2x quotecontent"></i>
      </div>
      <p className="content">
        <b>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi id
          perferendis maxime. Mollitia nam repudiandae dicta, inventore
          doloribus excepturi qui minima magnam eum quasi Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Quas molestiae quis quam, vel totam
          animi alias pariatur officia labore sunt laudantium cum neque! Quod
          libero quos beatae incidunt repudiandae nam?
        </b>
      </p>
      <div className=" content text-muted">Industry(s)</div>
      <div className="badgesgrp">
        <span className="indbadgs">Web Development</span>
        <span className="indbadgs">Fine Arts</span>
      </div>
      <div className="content text-muted">Organisations and Groups</div>
      <div className="badgesgrp">
        <span className="orgbadgs">IAW</span>
        <span className="orgbadgs">Denver Rugby</span>
      </div>
      <div className="content text-muted">Interests and Activities</div>
      <div className="badgesgrp">
        <span className="intrbadgs">Hiking</span>
        <span className="intrbadgs">Professioal Speaking</span>
        <span className="intrbadgs">Guitar</span>
      </div>
      <div className="content text-muted">Alumni</div>
      <div className="badgesgrp">
        <span className="almbadgs">Spark Colardo</span>
        <span className="almbadgs">UC Technology</span>
      </div>
      <div className="content text-muted">Languages</div>
      <div className="badgesgrp">
        <span className="langbadgs">English</span>
        <span className="langbadgs">Spanish</span>
        <span className="langbadgs">Hebrew</span>
      </div>
      <div className="lowernote">
        <b>Exchange Phone Number & Email</b>
      </div>
      <div className="content text-muted">Business Address</div>
      <p className="content comp">A Digital Agency</p>
      <p className="content add">123 Sycamore Dr</p>
      <p className="content add">Torrington CT,06790</p>
    </div>
  );
}

export default ProfileDetails;
