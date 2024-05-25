import React from 'react'
import '../../CSS/footer.css'
import Contact from './Contact'
import SocialShare from './SocialShare'
import { TypeAnimation } from 'react-type-animation';
const Footer = () => {
  return (
    <>
    <div className="contact">
       <TypeAnimation
      sequence={[
        
        "Contact Me...",
        1000,
        '',
        1000


      ]}
      wrapper="h1"
      speed={10}
      repeat={Infinity}
    /><Contact/>
      </div>
    <SocialShare/>
    </>
  )    
}

export default Footer