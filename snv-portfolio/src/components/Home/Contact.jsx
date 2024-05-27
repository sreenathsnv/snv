import React, { useState } from 'react'
import '../../CSS/submit.css'

import { motion } from "framer-motion"
const Contact = () => {

    const [name,setName] = useState(null)
    const [email,setEmail] = useState(null)
    const [message,setMessage] = useState("Type your mesage here")
    const handleSend = ()=>{}
  return (
    <motion.div 
    initial={{scale:.85}}
    whileInView={{scale:1}}
    transition={{delay:.05,duration:.5,type:'spring',stiffness:120}}
    viewport={{once:true}}
    className='message-form'>
        <form action="" className='footer-form'>

            <div className="input-container">
                <input  className="input-field" type="text" required/>
                <label for="input-field" class="input-label">Your name</label>
                <span className="input-highlight"></span>
            </div>

            <div className="input-container">
                <input  className="input-field" type="email" required/>
                <label for="input-field" class="input-label">Email</label>
                <span className="input-highlight"></span>
            </div>
            <div className="input-container">
                <textarea   onChange={(e)=>{setMessage(e.target.value)}} className="input-field"/>
                <label for="input-field" class="input-label">Message here</label>
                <span className="input-highlight"></span>
            </div>
            
            <motion.button 
            initial={{scale:1,rotateZ:0}}
            whileTap={()=>{
                handleSend()
                return({scale:[1,1.1,1.4,1], rotateZ:[0,10,-10,10,0]})
            }}
            className='submit-bt' type='submit'>Send</motion.button>
        </form>
    </motion.div>
  )
}

export default Contact