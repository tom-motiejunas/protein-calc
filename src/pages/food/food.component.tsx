import React from "react";

import "./food.styles.css";

import Stats from "../../components/stats/stats.component";
import Footer from "../../components/footer/footer.component";

export default function FoodPage() {
  return (
    <main className="food-page">
      <h1 className="logo">Proteinfy</h1>
      <h2>Breakfast</h2>
      <section className="meal breakfast">
        <div></div>
        <div></div>
        <div></div>
      </section>
      <Stats></Stats>
      <h2>Lunch</h2>
      <section className="meal lunch">
        <div></div>
        <div></div>
        <div></div>
      </section>
      <Stats></Stats>
      <h2>Dinner</h2>
      <section className="meal dinner">
        <div></div>
        <div></div>
        <div></div>
      </section>
      <Stats></Stats>
      <h2>Aditional</h2>
      <section className="meal aditional">
        <div></div>
        <div></div>
        <div></div>
      </section>
      <Stats></Stats>
      <Footer></Footer>
    </main>
  );
}
