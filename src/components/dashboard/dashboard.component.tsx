import React from "react";

import "./dashboard.style.css";

export default function Dashboard() {
  return (
    <section className="dashboard-container">
      <ul className="dashboard-items upper">
        <div className="dashboard-item"></div>
        <div className="dashboard-item"></div>
      </ul>
      <ul className="dashboard-items lower">
        <div className="dashboard-item"></div>
        <div className="dashboard-item"></div>
        <div className="dashboard-item"></div>
      </ul>
    </section>
  );
}
