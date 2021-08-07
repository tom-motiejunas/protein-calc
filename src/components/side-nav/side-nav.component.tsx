import React, { useRef } from "react";

import "./side-nav.style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function hideMenus(e: any) {
  let btn = e?.target.closest("button");
  if (!btn) return;
  let svg = btn.children[0].children[0];
  svg.classList.toggle("rotated");

  const classToHide = btn.parentNode.classList;
  const listToHide = document.querySelectorAll(`.${classToHide} li`);
  listToHide.forEach((el) => {
    el.classList.toggle("hide");
  });
}

export default function SideNav() {
  return (
    <nav className="side-nav">
      <h2>Proteinfy</h2>
      <ul className="list-container">
        <ul className="nutrition">
          <button onClick={hideMenus}>
            Nutrition{" "}
            <span className="open">
              <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
            </span>
          </button>
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
        <ul className="gym-activity">
          <button onClick={hideMenus}>
            Gym Activity
            <span className="open">
              <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
            </span>
          </button>
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
        <ul className="sleep">
          <button onClick={hideMenus}>
            Sleep
            <span className="open">
              <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
            </span>
          </button>
          <li>
            <button>Sleep Time</button>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
