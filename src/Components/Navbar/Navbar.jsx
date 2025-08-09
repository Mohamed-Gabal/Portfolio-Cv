import React from 'react'
import "./navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <a href='#gabal'>Gabal</a>
      </div>
      <ul className='nav-menu'>
        <li><a style={{textDecoration: "none", color: "white"}} href='#home'>Home</a></li>
         <li><a style={{textDecoration: "none", color: "white"}} href='#about'>About Me</a></li>
         <li><a style={{textDecoration: "none", color: "white"}} href='#services'>Services</a></li>
         <li><a style={{textDecoration: "none", color: "white"}} href='#work'>Portfolio</a></li>
         <li><a style={{textDecoration: "none", color: "white"}} href='#contact'>Contact</a></li>
      </ul>
      <div className='nav-connect'>Connect with Me</div>
    </div>
  )
}

export default Navbar