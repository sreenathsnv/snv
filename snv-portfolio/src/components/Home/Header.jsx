import React from 'react'
import ProfilePic from '../../assets/images/profilepic.png'
import '../../CSS/scroll-icon.css'
const Header = () => {
  return (
    <>
    <div className="header-container">

        <div className="profile-photo">
            <img src={ProfilePic} alt="" srcset=""/>
        </div>

        <div className="text-heading">

            <h1 className="main-heading">Hi I'm Sreenath</h1>
            <div className="social-links">
                <a href="https://instagram.com/_im.sreenath_/" target = "_blank" className="icon">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://github.com/sreenathsnv/" target = "_blank" className="icon">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://in.linkedin.com/in/sreenath-v-097050217" className="icon" target = "_blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/Sreenath_snv" target = "_blank" className="icon">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="mailto:sreenathsnvaltpb@gmail.com" className="icon" target = "_blank">
                    <i className="fa-solid fa-envelope"></i>
                </a>
            </div>

        </div>
    </div>
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