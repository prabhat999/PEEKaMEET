import React, { createContext } from "react";
import "./SignInBody.css";
import image from "./group-18@3x.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const username = createContext();
export const password = createContext();

function SignInBody() {
  const reg = RegExp(/^((?=.*?[0-9])).{8,}$/);
  const navigate = useNavigate();
  const [initialState, setinitialState] = useState({
    mail: "",
    pass: "",
    status: true,
    status1: true,
  });
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!reg.test(e.target.password.value)) {
      setinitialState({ ...initialState, status: false });
    } else if (
      !(
        e.target.email.value == "bhagyashree.srivastava@daffodilsw.com" &&
        e.target.password.value == "Hrhk@1234"
      )
    ) {
      setinitialState({ ...initialState, status1: false });
    } else {
      console.log("we can go further");

      <username.Provider value={e.target.email.value}>
        <password.Provider value={e.target.password.value}>
          {navigate("/profile")};
        </password.Provider>
      </username.Provider>;
    }
  };

  return (
    <div className="signinbody_main row">
      <div className="col-6">
        <img id="banner" src={image} alt="" />
      </div>
      <div className="col-6">
        <div class="signinbody_text">
          <span class="signinbody_text_start">PEEKaMEET</span> lets you network
          more effectively to achieve your business and career goals
        </div>
        <div id="badgesgroup">
          <span id="freelancer" className="badges">
            Freelancer
          </span>
          <span id="jobseeker" className="badges">
            Job Seeker
          </span>
          <span id="enter" className="badges">
            Enterpreneur
          </span>
          <span id="mom" className="badges">
            Mompreneur
          </span>

          <span id="intern" className="badges">
            Internship Seeker
          </span>
          <span id="envviro" className="badges">
            Evironmental Change Maker
          </span>
        </div>
        <div className="description">
          <span>Build and manage your network with PEEKaMEET</span>
        </div>
        <form onSubmit={formSubmitHandler}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label custom-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label custom-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
            {initialState.status ? (
              ""
            ) : (
              <div className="password-error">*Enter Valid password</div>
            )}
          </div>

          <button type="submit" className="btn btn-success w-100 main-color">
            Sign in
          </button>
          {initialState.status1 || !initialState.status ? (
            ""
          ) : (
            <div className="password-error">*Email or Password incorrect</div>
          )}
          <div className="mb-3 form-check mt-3">
            <input
              name="checkbox"
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <div className="xyz">
              <div>
                <label className="form-check-label" for="exampleCheck1">
                  Remember Me
                </label>
              </div>
              <a id="link" href="abc.com">
                Forgot Password
              </a>
            </div>
          </div>
        </form>
        <div className="donthaveaccnt">
          <span>Don't have an account? </span>
          <a id="signup" href="abc.com">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignInBody;
