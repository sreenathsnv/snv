import React, { useEffect, useRef, useState } from 'react'

import { motion } from "framer-motion"

const ChildVariant = {
  hidden:{
      opacity:0,
      y:-20,
  },
  show:{
      opacity:1,
      y:0,
      
      transition:{
        duration:1,
      },
  }
}
const ProjectCard = ({data}) => {
   
  const {heading,desc,image,github} = data

  return (
    <motion.div 

    variants={ChildVariant}
    viewport={{once:true}}
    whileHover={{scale:1.1}}
    className="project-card">
                <div className="snapshots">
                    <img src={image} />
                </div>
                <div className="card-contents">
                    <h3 className="project-name">{heading}</h3>
                <p className="desc-project">{desc}</p>
                <a href={github} target='_blank'>
                <button className='github-btn'>
                    <p>github</p>
                    <a href={github}></a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </a>
                </div>
            </motion.div>
  )
}

export default ProjectCard