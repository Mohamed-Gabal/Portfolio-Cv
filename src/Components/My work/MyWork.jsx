import React from 'react'
import "./myWork.css";
import myWork_data from "./MyWork-test.js";
import { FaArrowRightLong } from "react-icons/fa6";

const MyWork = () => {
  return (
    <div id='work' className='my-work'>
      <div className='myWork-title'>
        <h1>My latest work</h1>
      </div>
      <div className='myWork-container'>
        {myWork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt=''/>
        })}
      </div>
      <div className='myWork-showMore'>
        <p>Show More</p>
        <FaArrowRightLong />
      </div>
    </div>
  )
}

export default MyWork;