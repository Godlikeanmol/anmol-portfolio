import React from 'react'
import './header.css'
import ai from '../../assets/ai.png'
function Header() {
  return (
    <div className="anmol-port__header section__padding" id='home'>
      <div className="anmol-port__header-content">
        <h1 className="gradient__text">
          Crafting Engaging Web Experiences with React
        </h1>
        <p>Crafting Intuitive Web Experiences with React | Ready to Make an Impact </p>
        <div className="anmol-port__header-content__input">
          <input type="email" name="" id="" placeholder='Your Email'/>
          <button type='button'>Get iN Touch</button>
        </div>
      </div>
      <div className='anmol-port__header-image'>
        <img src={ai} alt="" />
      </div>
    </div>
  )
}

export default Header