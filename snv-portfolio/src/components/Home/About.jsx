import React from 'react'
import { motion } from "framer-motion"
const About = () => {
  return (
    <motion.div 
    initial={{opacity:0,x:-10}}
    whileInView={{
      opacity:1,
      x:0
    }}
    viewport={{margin:'50px',amount:.5,once:true}}
    transition={{duration:1,delay:.05,stiffness:250}}
    className="about">
        <p className="about-head">About</p>
        <p className="content-about">
<b style={{'color':'#3a5a40'}}><b style={{fontSize:'3vh',marginLeft:'6vh',marginRight:'1vh'}}>Hello.!</b> I'm a passionate Full Stack Developer with a keen interest in technology and development.</b> Currently, I'm pursuing my Master's in Computer Applications, which allows me to deepen my knowledge and skills in this ever-evolving field. 

I love solving problems and thrive on the excitement of discovering new things through continuous learning. Whether it's developing innovative web applications or exploring the latest tech trends, I am always eager to take on new challenges and expand my horizons.

<br></br><br></br>
<b style={{fontSize:'3vh',margin:'auto',color:'#f8333c'}}>Let's connect and create something amazing together!</b>
        </p>
    </motion.div>
  )
}

export default About