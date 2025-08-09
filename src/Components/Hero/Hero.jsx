import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img src="./image/Gabal-Tech.jpg" alt="" />
      <h1>
        <span> I’m Mohamed Ali,</span>Frontend developer React developer
      </h1>
      <p>
        My name is Mohamed Ali I'm a 23 year old Frontend Developer based in
        Mansoura, Egypt. I specialize in building responsive and user-friendly
        web applications using React. With 3 to 4 years of hands-on experience,
        I worked on various projects that enhanced my skills in modern web
        development, UI/UX design, and performance optimization
      </p>
      <div className="hero-action">
        <a style={{textDecoration: "none", color: "white"}} href="#contact" className="hero-connect">Connect with me</a>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
