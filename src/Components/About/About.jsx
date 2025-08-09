import React from "react";
import "./about.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src="./image/gabal.jpg"/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am an experienced Frontend Developer with over a decode of professional expertise in the field. Throughout my career. i have hod the privllege of colloborating with prestiglous organizations, contributing to their success and growth</p>
            <p>My passion for Frontend development is not only reflected in my extensive experience but olso in the enthusiosm and dedication i bring to eoch project!</p>
          </div>
          <div className="about-skills">
             <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}}/></div>
             <div className="about-skill"><p>React Js</p><hr style={{width: "50%"}}/></div>
             <div className="about-skill"><p>JavaScript</p><hr style={{width: "50%"}}/></div>
             <div className="about-skill"><p>Next Js</p><hr style={{width: "50%"}}/></div>
             <div className="about-skill"><p>TybeScript</p><hr style={{width: "50%"}}/></div>
             <div className="about-skill"><p>State Management</p><hr style={{width: "50%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>HAAPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
