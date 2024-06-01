import React, { useState,useEffect } from 'react'
import '../../CSS/submit.css'
import {} from 'react-hook-form'
import { motion } from "framer-motion"
import { useForm } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';
const Contact = () => {

    const formspreeKey = import.meta.env.VITE_FORMSPREE_KEY;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });

    const [state, handleSubmit] = useForm(formspreeKey);
    const notify = () => toast.success('Message sent!')
    useEffect(() => {
        if (state.succeeded) {
            notify()
          setFormData({
            name: "",
            email: "",
            message:"",
          });
        }
      }, [state.succeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    
    <motion.div 
    initial={{scale:.85}}
    whileInView={{scale:1}}
    transition={{delay:.05,duration:.5,type:'spring',stiffness:120}}
    viewport={{once:true}}
    className='message-form'>
        <Toaster
        />
        <form action="" className='footer-form' onSubmit={handleSubmit}>

            <div className="input-container">
                <input  
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className="input-field" type="text" required/>
                <label for="input-field" class="input-label">Your name</label>
                <span className="input-highlight"></span>
            </div>

            <div className="input-container">
                <input value={formData.email}
                id='email'
                name='email'
                onChange={handleChange}
                 className="input-field" type="email" required/>
                <label for="input-field" class="input-label">Email</label>
                <span className="input-highlight"></span>
            </div>
            <div className="input-container">
                <textarea  
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                className="input-field"/>
                <label for="input-field" class="input-label">Message here</label>
                <span className="input-highlight"></span>
            </div>
            
            <motion.button 
            disabled={state.submitting}
            initial={{scale:1,rotateZ:0}}
            whileTap={()=>{
                return({scale:[1,1.1,1.4,1], rotateZ:[0,10,-10,10,0]})
            }}
            className='submit-bt' type='submit'>Send</motion.button>
        </form>
    </motion.div>
  )
}

export default Contact