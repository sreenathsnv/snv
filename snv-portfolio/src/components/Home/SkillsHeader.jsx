import React, { useRef } from 'react'
import { motion, spring, useAnimation, useInView } from "framer-motion"


const SkillsHeader = () => {

  const contRef  = useRef()
  const view = useInView(contRef,{once:true})
  const containerAnimate = useAnimation()
  return (
        <motion.div 
        ref={contRef}
        initial={{opacity:0,
          x:-20,
        }}
        whileInView={
          {
            opacity:1,
            x:0,

        }}
        transition={{duration:1,delay:.05}}
        className="skills-head">
            <p className="skills-heading">Skills</p>
            <p className="skills-quote">"The expert in anything was once a beginner"</p>
        </motion.div>
  )
}

export default SkillsHeader