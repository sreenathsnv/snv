import React from 'react'
import '../../CSS/footer.css'
import Contact from './Contact'
import SocialShare from './SocialShare'
const Footer = () => {
  return (
    <>
    <div className="contact">
        <h1>Contact Me</h1>
        <Contact/>
      </div>
    {/* <SocialShare/> */}
    </>
  )    
}

export default Footer