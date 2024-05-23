import React, { useState } from "react";
import "./styles.css";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState("profile");
  const setPage = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="dashboard">
      <div className="dashboardCont">
        <div className="header">
          <div className="left">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-WAv-WyGLNTjLjBlp6mzH2zyGnHtKTqrlA&usqp=CAU"
              alt=""
            />
          </div>
          <div className="right">
            <h1>Oke Habeeb Adedayo</h1>
            <h2>Student</h2>
          </div>
        </div>
        <div className="sectionCont">
          <ul>
          <li
          onClick={() => setPage("profile")}
          className={currentPage === "profile" ? "activedash" : ""}
        >
          PROFILE
        </li>
        <li
          onClick={() => setPage("result")}
          className={currentPage === "result" ? "activedash" : ""}
        >
          RESULT
        </li>
        <li
          onClick={() => setPage("payment")}
          className={currentPage === "payment" ? "activedash" : ""}
        >
          PAYMENT
        </li>
        <li
          onClick={() => setPage("biodata")}
          className={currentPage === "biodata" ? "activedash" : ""}
        >
          BIODATA
        </li>
        <li
          onClick={() => setPage("blog")}
          className={currentPage === "blog" ? "activedash" : ""}
        >
          BLOG
        </li>
          </ul>
          <div className="section"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
