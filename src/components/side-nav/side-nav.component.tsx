import React, { useRef } from "react";

import "./side-nav.style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";

function hideMenus(e: any) {
  let btn = e?.target.closest("button");
  if (!btn) return;
  let svg = btn.children[0].children[0];
  svg.classList.toggle("rotated");

  const classToHide = btn.parentNode.classList;
  const listToHide = document.querySelectorAll(
    `.${classToHide} .menu-item-list`
  );
  listToHide.forEach((el) => {
    el.classList.toggle("hide");
  });
}

function hideNav() {
  const navigation = document.querySelector(".side-nav");
  const main = document.querySelector("main");
  navigation?.classList.toggle("shrink");
  main?.classList.toggle("grow");
}

export default function SideNav() {
  return (
    <nav className="side-nav">
      <div className="header">
        <h2>Proteinfy</h2>
        <button onClick={hideNav}>
          <FontAwesomeIcon icon={faBars} className="fa-2x"></FontAwesomeIcon>
        </button>
      </div>
      <ul className="list-container">
        <ul className="nutrition">
          <button onClick={hideMenus}>
            Nutrition{" "}
            <span className="open">
              <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
            </span>
          </button>
          <ul className="menu-item-list nutr">
            <li>
              <button>Food</button>
            </li>
            <li>
              <button>Micronutrients</button>
            </li>
            <li>
              <button>Calories</button>
            </li>
            <li>
              <button>Caffeine</button>
            </li>
            <li>
              <button>Recipies</button>
            </li>
          </ul>
        </ul>
        <ul className="gym-activity">
          <button onClick={hideMenus}>
            Gym Activity
            <span className="open">
              <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
            </span>
          </button>
          <ul className="menu-item-list gym">
            <li>
              <button>Gym Time</button>
            </li>
            <li>
              <button>Program</button>
            </li>
            <li>
              <button>Personal Records</button>
            </li>
            <li>
              <button>Training</button>
            </li>
          </ul>
        </ul>
        <ul className="sleep">
          <button onClick={hideMenus}>
            Sleep
            <span className="open">
              <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
            </span>
          </button>
          <ul className="menu-item-list sleep-cont">
            <li>
              <button>Sleep Time</button>
            </li>
          </ul>
        </ul>
      </ul>
    </nav>
  );
}
