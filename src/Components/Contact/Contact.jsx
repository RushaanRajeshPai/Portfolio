import React from 'react'
import './Contact.css'
import line from '../Assets/line.png'
import loc from '../Assets/loc.png'
import call from '../Assets/call.png'
import mail from '../Assets/mail.png'

const Contact = () => {
  return (
    <div id='contact' className='section'>
        <h1 id='porth1'><span>CONTACT</span></h1>
        <div id='line1'><img src={line} alt="" /></div>
        <h2 id='porth2'>SHARE <span>YOUR</span> THOUGHTS</h2>
        <div className='contactbelow'>
            <div className='contactleft'>
                <div className='con1'>
                    <div><img src={call} alt="" id='call'/></div>
                    <h3><span>+91 9920931348</span></h3>
                </div>
                <div className='con2'>
                    <div><img src={mail} alt="" id='call'/></div>
                    <h3><span>pairushaan64@gmail.com</span></h3>
                </div>
                <div className='con3'>
                    <div><img src={loc} alt="" id='call' /></div>
                    <h3><span>Mumbai, India</span></h3>
                </div>
            </div>
            <div className='contactright'>
                <input type="text" placeholder='Enter your name' id='ipname'/><br />
                <input type="text" placeholder='Enter your email' id='ipname'/><br />
                <input type="text" placeholder='Enter your phone no' id='ipname'/><br />
                <input type="text" placeholder='Enter your message...' id='ipmsg'/><br />
                <button id='submitbtn'><strong>Submit</strong></button>
            </div>
        </div>
    </div>
  )
}

export default Contact