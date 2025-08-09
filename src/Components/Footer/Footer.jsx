import React from "react";
import "./footer.css";
import { CiUser } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <a href="#">Gabal</a>
          <p>
            I am a frontend developer from, Mansoura, Egypt with 4+ years of
            experience in companies like microsoft, Tesla and Apple.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <CiUser style={{color: "white", fontSize: "20px"}}/>
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2025 Mohamed Gabal. All rights reserved</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
