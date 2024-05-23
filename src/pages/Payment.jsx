import React, { useContext } from "react";
import "./styles.css";
import { FaUserAlt } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { AuthUserContext } from "../Context/AuthUserContext";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { setuserLoggedIn } = useContext(AuthUserContext);
  const navigate = useNavigate();
  const setPage = () => {
    setuserLoggedIn(true);
    navigate("/");
  };
  return (
    <div className="payment">
      {/* <div className="PaymentCont"> */}
      <h1>Full time Undergraduate Student</h1>
      <div className="paymentCont">
        <h2>PAYMENT</h2>
        <form action="">
          <div className="inpt">
          <label htmlFor="">CARDHOLDER'S NAME</label>
          <div className="inputSection">
            <div className="icon">
              <FaUserAlt />
            </div>
            <input type="text" />
          </div>
          </div>
          <br />

          <div className="inpt">
          <label htmlFor="">CARD NUMBER</label>
          <div className="inputSection">
            <div className="icon">
              <GiPadlock />
            </div>
            <input type="text" />
          </div>
          </div>
          <br />
          <div className="otherdet">
            <div className="left">
              <label htmlFor="">EXPIRY DATE</label>
              <div className="inputSection">
                <div className="icon">
                  <GiPadlock />
                </div>
                <input type="text" placeholder="" />
              </div>
            </div>
            <div className="right">
              <label htmlFor="">CVV</label>
              <div className="inputSection">
                <div className="icon">
                  <GiPadlock />
                </div>
                <input type="text" />
              </div>
            </div>
          </div>
          <br />
        </form>
        <button onClick={() => setPage()} className="pry_btn">
          Submit
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Payment;
