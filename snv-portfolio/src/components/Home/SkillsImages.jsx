import React from 'react'
import Python from '../../assets/images/skills/snakes.png' 
import Html from '../../assets/images/skills/html-5.png' 
import Css from '../../assets/images/skills/css-3.png' 
import Git from '../../assets/images/skills/git.png' 
import Django from '../../assets/images/skills/djangoproject.svg' 
import ReactImage from '../../assets/images/skills/science.png' 
import Js from '../../assets/images/skills/js.png' 
import C from '../../assets/images/skills/letter-c.png' 
import SkillImageComponent from './SkillImageComponent'
import { delay, motion,stagger } from "framer-motion"
const SkillsImages = () => {

    let images = [Python,Django,ReactImage,Html,Css,Js,C,Git]

    return(

        <motion.div 
        initial={{
            y:100,
            opacity:0,
        }}
        whileInView={{
            y:0,
            opacity:1    
        }}
        viewport={{once:true,margin:'-250px'}}
        transition={{delay:.05,duration:1,staggerChildren:.5}}
        className="skills-img">
            {
                
                images.map((ele,index)=>(

                    <SkillImageComponent key={index} image={ele}/>
                ))
            }
            
        </motion.div>
    )

}

export default SkillsImages