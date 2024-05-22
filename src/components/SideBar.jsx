import React, { useContext, useState } from "react";
import "./styles.css";
import { AuthUserContext } from "../Context/AuthUserContext";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { userLoggedIn } = useContext(AuthUserContext);
  console.log(userLoggedIn)
  const [currentPage, setCurrentPage] = useState("dashboard");

  const setPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <h1>FIDC</h1>
      </div>
      <ul>
        {userLoggedIn && <li
          onClick={() => setPage("dashboard")}
          className={currentPage === "dashboard" ? "activepage" : ""}
        >
          <Link to="/">Dashboard</Link>
        </li>}
        {!userLoggedIn && <li
          onClick={() => setPage("login")}
          className={currentPage === "login" ? "activepage" : ""}
        >
          <Link to="/login">Login</Link>
        </li>}
        {!userLoggedIn && <li
          onClick={() => setPage("signup")}
          className={currentPage === "signup" ? "activepage" : ""}
        >
          <Link to="/signup">SignUp</Link>
        </li>}
        {userLoggedIn && <li
          onClick={() => setPage("payment")}
          className={currentPage === "payment" ? "activepage" : ""}
        >
          <Link to="/payment">Payment</Link>
        </li>}
      </ul>
    </div>
  );
};

export default SideBar;