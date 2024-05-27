import React, { useState } from "react";
import "../../CSS/navbar.css";
import "../../CSS/resume.css";
import { motion, spring } from "framer-motion"

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");


  const handleDownload = () => {

    const fileUrl = '../../../public/resume.pdf';
    const fileName = 'SREENATH V';
    console.log('CLICKED')

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
    <nav className="nav" id="nav">
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
          <motion.button
            initial={{scale:1}}
            whileTap={()=>{
              handleDownload()
              return({scale:1.4})
            }}
            transition={{type:'spring',stiffness:125}}
            className="button">
            <span>Resume</span>
          </motion.button >
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