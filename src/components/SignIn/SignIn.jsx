import React from "react";
import "./SignIn.css";
import SignInBody from "./SignInBody/SignInBody";
import SignInHeader from "./SignInHeader/SignInHeader";

function SignIn() {
  return (
    <div className="signin_main container">
      <SignInHeader />
      <SignInBody />
    </div>
  );
}

export default SignIn;
