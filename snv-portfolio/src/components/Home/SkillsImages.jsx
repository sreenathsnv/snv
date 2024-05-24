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
const SkillsImages = () => {

    let images = [Python,Django,ReactImage,Html,Css,Js,C,Git]

    return(

        <div className="skills">
            {
                
                images.forEach((ele,index)=>(

                    <SkillImageComponent key={index} image={Python}/>
                ))
            }
            
        </div>
    )

}

export default SkillsImages