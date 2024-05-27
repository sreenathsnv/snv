import React from 'react'
import '../../CSS/education.css'
import EducationCardContainer from './EducationCardContainer'
import { motion } from "framer-motion"
const Education = () => {
  return (
    <div className="timeline-header-container">
        <motion.h1 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,delay:0.05}}
        viewport={{once:true}}
        className='education-header'>Education</motion.h1>
        <EducationCardContainer/>
    </div>
  )
}

export default Education