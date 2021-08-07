import React from "react";
import "./App.css";

import SideNav from "./components/side-nav/side-nav.component";
import Stats from "./components/stats/stats.component";
import Dashboard from "./components/dashboard/dashboard.component";
import BigStat from "./components/big-stat/big-stat.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <SideNav></SideNav>
      <main>
        <h1 className="logo">Proteinfy</h1>
        <Stats></Stats>
        <h2 className="section-header">Dashboard</h2>
        <Dashboard></Dashboard>
        <BigStat></BigStat>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
