import React from 'react'
import "./contact.css";
import { BiLogoGmail } from "react-icons/bi";
import { LuPhoneCall } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    
    if(!name || !email || !message) {
      alert("Please fill out all fields before submitting!");
      return;
    }
    alert ("Form submitted successfully!");
  }
  return (
    <div id="contact" className='contact'>
      <div className='contact-title'>
        <h1>Get in Touch</h1>
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h2>Let.s talk</h2>
          <p>I.m currently avaliable to take on new projects, so feel free to send ma e message about anything that you want me to work on. you can contact anytime</p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <BiLogoGmail />
              <p>abogabal672@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <LuPhoneCall />
              <p>+020-01001034941</p>
            </div>
            <div className='contact-detail'>
              <FaLocationDot />
              <p>Mansoura, Egypt </p>
            </div>
          </div>
        </div>
        <form className='contact-right' onSubmit={handelSubmit}>
          <label htmlFor=''>Your Name</label>
          <input type='text' placeholder='Enter Your Name' name='name' autoComplete='off'/>
          <label htmlFor=''>Your Email</label>
          <input type='email' placeholder='Enter Your Email' name='email' autoComplete='off'/>
          <label htmlFor=''>Write your message here</label>
          <textarea name='message' rows="8" placeholder='Enter Your Message'></textarea>
          <button className='contact-submit' type='submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;