import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'
function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title={"My Journey in Web Development"} text={"I'm Anmol Jat, a Passionate aspiring web Developer dedicated to creating exception user experiences. As a fresher in the field of web development, I'm exxited to embark on this journey of learing, growth and exploration.  "}/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          Eager to Collaborate and Contribute to Meaningful Projects
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title={"My Journey"} text={"I Immersed myself in web development, Completing Personal Project, overcoming Javascript challange and desiging websites much faster with the help of Frameworks ."} />
        <Feature title={"Skils  Expertise"} text={"Proficient in React, HTML/CSS, Javascript, Bootstrap, Routing, Redux & API integration. Creating dynamic user interfaces & expanding Knowledge in development "}/>
        <Feature title={"Passion and Future Goals"} text={"Driven to create seamless web experiences, I am to contribute my skills to meaningful projects. Comitted to continuous learning, I strive to leave a lasting impact"}/>
      </div>
      
    </div>
  )
}

export default WhatGPT3