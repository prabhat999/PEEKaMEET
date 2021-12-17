import React from "react";
import "./SignInHeader.css";

function SignInHeader() {
  return (
    <div className="signinheader_main row align-items-center">
      <div className="col-6 text-start">
        <div className="logo">
          <img
            src="https://peekameet.com/images/icons/header_logo.png"
            alt=""
          />
          <span>PEEKaMEET</span>
        </div>
      </div>

      <div className="col-6 text-end">
        <button className="btn btn-light signin-btn">Sign in</button>
      </div>
    </div>
  );
}

export default SignInHeader;
