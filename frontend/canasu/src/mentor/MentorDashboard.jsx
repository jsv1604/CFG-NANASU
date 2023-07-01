import React from "react";
import "../styles/MentorDashboard.css";
import BaseComponent from "bootstrap/js/dist/base-component";
import BatchCard from "./BatchCard";

const MentorDashboard = () => {
  return (
    <>
      <div className="mentordashboard">
        <div className="sidebar"></div>
        <div className="mainContainer">
          <h1 className="mentorHeading"> Mentor Page </h1>

          <div className="headingDiv">
            <h1 className="batchHeading"> Scheduled Batches</h1>
          </div>
          <div className="batchBody">
            <BatchCard />
            <BatchCard />
            <BatchCard />
            <BatchCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorDashboard;