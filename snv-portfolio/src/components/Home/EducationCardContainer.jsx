import React from 'react'
import EduacationCard from './EduacationCard'
import { motion } from "framer-motion"
const EducationCardContainer = () => {

    const CardData = [
        {
            title:"Bsc Mathematics",
            content:"Mahatma Gandhi College,Kannur University",
        },
        {
            title:"Master Of Computer Appications",
            content:"Christ Deemed to be University,Banglore",
        },
    ]
  return (
    <motion.div 
    initial={{
        opacity:0,
    }}
    transition={{duration:1,delay:0.05}}
    whileInView={{  
        opacity:1,
    }}
    viewport={{once:true}}
    className="time-line-container">
        <div class="timeline">
            <div class="outer">
                <div class="card">
                    {
                        CardData.map((data,i)=>(
                            <EduacationCard data={data} key={i}/>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default EducationCardContainer