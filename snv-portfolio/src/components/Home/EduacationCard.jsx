import React from 'react'
import { motion } from "framer-motion"
const EduacationCard = ({data}) => {
    const {title,content}  =  data
  return (
    <div className="card">
        <motion.div 
        initial={{scale:0}}
        whileInView={{scale:1,originY:0,}}
        transition={{delay:.07,duration:1,type:'spring' ,stiffness:100}}
        viewport={{once:true}}
        className="info">
            <h3 className="title">{title}</h3>
            <p className='time-desc'>{content}</p>
        </motion.div>
    </div>

  )
}

export default EduacationCard