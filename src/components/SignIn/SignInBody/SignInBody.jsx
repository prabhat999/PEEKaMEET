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
    status3: true,
    emailempty: true,
    passempty: true,
  });
  const emailHandler = (e) => {
    setinitialState({
      ...initialState,
      mail: e.target.value,
      emailempty: false,
    });
  };
  const passwordHandler = (e) => {
    setinitialState({
      ...initialState,
      pass: e.target.value,
      passempty: false,
    });
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (initialState.emailempty || initialState.passempty) {
      setinitialState({ ...initialState, status3: false });
    } else if (!reg.test(initialState.pass)) {
      setinitialState({ ...initialState, status: false });
    } else if (
      !(
        initialState.mail === "bhagyashree.srivastava@daffodilsw.com" &&
        initialState.pass === "Hrhk@1234"
      )
    ) {
      setinitialState({ ...initialState, status1: false });
    } else {
      <username.Provider value={initialState.mail}>
        <password.Provider value={initialState.pass}>
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
        <div className="signinbody_text">
          <span className="signinbody_text_start">PEEKaMEET</span> lets you
          network more effectively to achieve your business and career goals
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
        <form onSubmit={(e) => formSubmitHandler(e)}>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label custom-label"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={emailHandler}
              value={initialState.mail}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label custom-label"
            >
              Password
            </label>
            <input
              onChange={passwordHandler}
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={initialState.pass}
              placeholder="Password"
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
          {initialState.status3 ? (
            ""
          ) : (
            <div className="password-error">
              *Email or Password can't be left empty
            </div>
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
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember Me
                </label>
              </div>
              <a id="link" href="https://peek-a-meet.herokuapp.com/">
                Forgot Password
              </a>
            </div>
          </div>
        </form>
        <div className="donthaveaccnt">
          <span>Don't have an account? </span>
          <a
            id="signup"
            href="https://peek-a-meet.herokuapp.com/

"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignInBody;
