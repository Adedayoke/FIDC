import React, { useContext } from "react";
import "./styles.css";
import { FaUserAlt } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { AuthUserContext } from "../Context/AuthUserContext";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const {setuserLoggedIn} = useContext(AuthUserContext);
  const navigate = useNavigate();
  const setPage = ()=>{
    setuserLoggedIn(true);
    navigate("/");
  }
  return (
    <div className="login">
      {/* <div className="loginCont"> */}
        <h1>Full time Undergraduate Student</h1>
        <div className="loginCont">
          <h2>Sign In</h2>
          <form action="">
            <div className="inputSection">
              <div className="icon">
                <FaUserAlt />
              </div>
              <input type="text" placeholder="Matric No" />
            </div>
            <br />
            
            <div className="inputSection">
              <div className="icon">
                <GiPadlock />
              </div>
              <input type="password" placeholder="Password" />
            </div>
            <br />
          </form>
          <button onClick={()=> setPage()} className="pry_btn">Submit</button>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Login;
