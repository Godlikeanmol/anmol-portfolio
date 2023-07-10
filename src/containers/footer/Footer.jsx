import React from 'react';
import './footer.css';
function Footer() {
  return (
    <div className="anmol-port section__padding">
      <div className="anmol-port-heading">
        <h1 className="gradient__text">
          Explore More
        </h1>
      </div>
      <div className="anmol-port-btn">
        <a href='../../assest/Anmol(Resume).webp' download>Download Resume</a>
      </div>
      <div className="anmol-port-links">
        <div className="anmol-port-links_info">
          <h1>Get in Touch</h1>
          <p>Email</p>
          <span>anmoljat000@gmail.com</span>
          <p>Contact No.</p>
          <span>+91 6267927770</span>
        </div>
        <div className="anmol-port-links_div">
          <h4>Links</h4>
          <p>About Me</p>
          <p>Social Media</p>
          <p>Portfolio</p>
          <p>Contact</p>
        </div>
        <div className="anmol-port-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy & Policy</p>
          <p><i className="fa-brands fa-linkedin-in"></i> <i className="fa-brands fa-git"></i></p>
        </div>
      </div>
      <div className="anmol-port-copyright">
        <p><sup>c</sup> 2023 ANMOL-portfolio. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;