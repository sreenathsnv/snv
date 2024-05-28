import React, { useState } from "react";
import "../../CSS/navbar.css";
import "../../CSS/resume.css";
import { motion, spring } from "framer-motion"

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [isdownload,setDownload] = useState(false)

  const handleDownload = () => {
    if(!isdownload){
      setDownload(true)

      const fileUrl = '/resume.pdf';
      const fileName = 'SREENATH V';

      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownload(false)
    
    }

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
          <a href="/#home" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/#about" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="/#skills" className="nav__link">
            Skills
          </a>
        </li>
        <li className="nav__item">
          <a href="/#projects" className="nav__link">
            Projects
          </a>
        </li>
        <li className="nav__item">
          <a href="/#contact" className="nav__link">
            Contact
          </a>
        </li>

        <li>
          <motion.button
            initial={{scale:1}}
            whileTap={()=>{
              return({scale:1.4})
            }}
            onTap={handleDownload}
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