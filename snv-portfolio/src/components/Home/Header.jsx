import React from 'react'
import ProfilePic from '../../assets/images/profilepic.png'
import '../../CSS/scroll-icon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faLinkedinIn ,faGithub,faXTwitter} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import { motion, spring } from "framer-motion"
const Header = () => {
  return (
    <>
    <motion.div 
    initial={{scale:.55}}
    animate = {{scale:1}}
    transition={{duration:1,type:"spring",stiffness:70}}
    viewport={{once:true}}
    className="header-container">

        <div className="profile-photo">
            <img src={ProfilePic} alt="" srcset=""/>
        </div>

        <div className="text-heading">

        <TypeAnimation
      sequence={[
        
        "I'm Sreenath",
        1000,
        
        "I'm a Full Stack Developer",
        1000,
        "I'm a MCA Student",
        1000,
        1000
      ]}
      wrapper="h1"
      speed={10}
      className='main-heading'
      repeat={Infinity}
      />
            <div className="social-links">
                <a href="https://instagram.com/_im.sreenath_/" target = "_blank" className="icon">
                <FontAwesomeIcon className='icon-i' icon={faInstagram} />
                </a>
                <a href="https://github.com/sreenathsnv/" target = "_blank" className="icon">
                <FontAwesomeIcon className='icon-i' icon={faGithub} />
                </a>
                <a href="https://in.linkedin.com/in/sreenath-v-097050217" className="icon" target = "_blank">
                    <FontAwesomeIcon className='icon-i' icon={faLinkedinIn} />
                </a>
                <a href="https://twitter.com/Sreenath_snv" target = "_blank" className="icon">
                <FontAwesomeIcon className='icon-i' icon={faXTwitter} />
                </a>
                <a href="mailto:sreenathsnvaltpb@gmail.com" className="icon" target = "_blank">
                <FontAwesomeIcon className='icon-i' icon={faEnvelope} />
                </a>
            </div>

        </div>
    </motion.div>
    {/* <div className="main__action">
    <a className="main__scroll" href="#">
      <div className="main__scroll-box">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z" fill="rgba(28,28,30,1)">
            </path>
        </svg>
      </div>
  
      <span className="main__scroll-text">Scroll</span>
    </a>
  </div> */}
  </>
  )
}

export default Header