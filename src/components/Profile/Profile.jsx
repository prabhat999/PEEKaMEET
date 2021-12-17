import React, { useEffect } from "react";
import ProfileBody from "./Profile Body/Profile Body";
import ProfileHeader from "./Profile Header/ProfileHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Profile.css";

function Profile() {
  useEffect(() => {
    toast.success("Welcome Back", {
      autoClose: 3000,
    });
  }, []);
  return (
    <div className="profile_main">
      <ProfileHeader />
      <ProfileBody />
      <ToastContainer />
    </div>
  );
}

export default Profile;
