import React from 'react'
import "./services.css";
import Services_Data from "./Services-test.js";
import { FaArrowRightLong } from "react-icons/fa6";


const Services = () => {
  return (
    <div id='services' className='services'>
      <div className='services-title'>
        <h1>My Services</h1>
      </div>
      <div className='services-container'>
        {Services_Data.map((item, index) => {
          return <div key={index} className='services-format'>
            <h3>{item.s_n}</h3>
            <h2>{item.s_name}</h2>
            <p>{item.s_desc}</p>
            <div className='services-read-more'>
              <p>Read More</p>
              <FaArrowRightLong className='icon'/>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services;