import React from 'react'
import './possibility.css'
function Possibility() {
  return (
    <div className="anmol__contact section__padding" id='possibility'>
      <div className="anmol__contact-form">
      <form action="">
        <div className='anmol__contact-flex'>
            <div className='anmol__contact-fill'>
                <input className='anmol__contact-input_info' type="text"placeholder='NAME' />
            </div>
            <div className='anmol__contact-fill'>
                <input className='anmol__contact-input_info' type="email" placeholder='EMAIL'/>
            </div>
          </div>
          <div className='anmol__contact-input'>
              <textarea className='anmol__contact-input_info' name="mesg" id="msg" cols="30" rows="10" placeholder='WRITE YOUR MEASSAGE'></textarea>          
          </div>
          <div className='anmol__contact-input'>
            <button type='button' className='anmol__contact-btn'>SEND MESSAGE</button>
          </div>
        </form>
      </div>
      <div className="anmol__contact-content">
        {/* <h4>Request Early Access to Get Started</h4>  */}
        <h1 className="gradient__text">
          Let's Connect
        </h1>
        
        <ul className='anmol__contact-info'>
          <li><p>EMAIL</p></li>
          <li><span>anmoljat000@gmail.com</span></li>
          <li><p>PHONE</p></li>
          <li><span>+91 6267927770</span></li>
          <li><p>ADDRESS</p></li>
          <li><span>777, Shilnath Camp Indore, MP 452003</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Possibility