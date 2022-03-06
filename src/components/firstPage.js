import React from "react";
import "./firstPage.css"

import Calendar from "../Calendar_Isometric.png";

function FirstPage() {
  return (
    <div >
      <div className="head">
        <h1 className="cal-head">Calender</h1>
        <h1 className="year-head">2022</h1>
      </div>

      <div className="calen-img">
        <img className="calendar" src={Calendar} alt="calendar" />
      </div>
      <div className="text-area">
        <div className="main-text">
          <h2>Dear Aman</h2>
          <p>
            Welcome to your daily event calendar. Be more engaging &
            personalised than ever before. We’ll help you in Tracking Upcoming
            Events, Scheduling Meetings & Creating New Event!
          </p>
        </div>
        <div className="button">
          <button className="next-btn">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
