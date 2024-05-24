import React, { useState } from "react";
import "../../CSS/navbar.css";
import "../../CSS/resume.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        Sreenath
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Portfolio
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Skills
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
        <li>
        <button class="botao">
  <svg
    class="mysvg"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height="24px"
    width="24px"
  >
    <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      id="SVGRepo_tracerCarrier"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g id="Interface / Download">
        <path
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          stroke="#f1f1f1"
          d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
          id="Vector"
        ></path>
      </g>
    </g>
  </svg>
  <span class="texto">Resume</span>
</button>
            
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;