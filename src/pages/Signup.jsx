import React, { useContext } from "react";
import "./styles.css";
import { FaUserAlt } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { AuthUserContext } from "../Context/AuthUserContext";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const { setuserLoggedIn } = useContext(AuthUserContext);
  const navigate = useNavigate();
  const setPage = () => {
    setuserLoggedIn(true);
    navigate("/");
  };
  return (
    <div className="signup">
      {/* <div className="SignupCont"> */}
      <h1>Full time Undergraduate Student</h1>
      <div className="signupCont">
        <h2>Sign Up</h2>
        <form action="">
          <div className="left">
            <div className="inputSection">
              <div className="icon">
                <FaUserAlt />
              </div>
              <input type="text" placeholder="SurName" />
            </div>
            <br />
            <div className="inputSection">
              <div className="icon">
                <GiPadlock />
              </div>
              <input type="text" placeholder="Middle Name" />
            </div>
            <br />
            <div className="inputSection">
              <div className="icon">
                <FaUserAlt />
              </div>
              <input type="email" placeholder="Email" />
            </div>
            <br />
            <div className="inputSection">
              <div className="icon">
                <GiPadlock />
              </div>
              <input type="text" placeholder="Matric No" />
            </div>
          </div>
          <div className="right">
          <div className="inputSection">
              <div className="icon">
                <FaUserAlt />
              </div>
              <input type="text" placeholder="Last Name" />
            </div>
            <br />
            <div className="inputSection">
              <div className="icon">
                <GiPadlock />
              </div>
              <input type="text" placeholder="Gender(Male/Female)" />
            </div>
            <br />
            <div className="inputSection">
              <div className="icon">
                <FaUserAlt />
              </div>
              <input type="password" placeholder="Password" />
            </div>
            <br />
            <div className="inputSection">
              <div className="icon">
                <GiPadlock />
              </div>
              <input type="password" placeholder="Confirm Password" />
            </div>
          </div>
          <br />
        </form>
        <button onClick={() => setPage()} className="pry_btn">
          Signup
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Signup;
