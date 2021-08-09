import React from "react";

import "./stats.component.css";

import AddStatistic from "../add-statistic/add-statistic.component";

export default function Stats() {
  return (
    <ul className="stat-container">
      <div className="stat-item">
        <h3>Today Calories</h3>
        <span>1900 cal</span>
      </div>
      <div className="stat-item">
        <h3>Squat Progress Chart</h3>
        <span>+10kg</span>
      </div>
      <div className="stat-item">
        <h3>Sleep Time</h3>
        <span>8 hours</span>
      </div>
      <AddStatistic></AddStatistic>
    </ul>
  );
}
