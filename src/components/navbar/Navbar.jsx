import React, { useState } from 'react'
import './navbar.css'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';
          
const Menu = () =>(
  <>
            <p><a href='#home'>Home</a></p>
            <p><a href='#wgpt3'>About</a></p>
            <p><a href='#possibility'>Portfolio</a></p>
            <p><a href='#features'>Contact</a></p>
  </>
)

function Navbar() {
  const [toggleMenu,setToggleMenu] = useState(false)


  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <h1>ANMOL</h1>
          </div>
          <div className="gpt3__navbar-links_container">
            <Menu/>
          </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button type="button">Hire Me</button>
      </div>
      <div className="gpt3__navbar-menu">
          {toggleMenu?<RiCloseLine size={27} color='#fff' onClick={()=> setToggleMenu(false)} />:<RiMenu3Line size={27} color='#fff' onClick={()=> setToggleMenu(true)}/>}

          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                    <Menu/>
                    <div className="gpt3__navbar-menu_container-links-sign">
                      <button type="button">Hire Me</button>
                    </div>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Navbar