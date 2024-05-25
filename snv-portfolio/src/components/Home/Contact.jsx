import React, { useState } from 'react'
import '../../CSS/submit.css'
const Contact = () => {

    const [name,setName] = useState(null)
    const [email,setEmail] = useState(null)
    const [message,setMessage] = useState("Type your mesage here")
  return (
    <div className='message-form'>
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
            
            <button className='submit-bt' type='submit'>Send</button>
        </form>
    </div>
  )
}

export default Contact