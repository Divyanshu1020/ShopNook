import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './NewsLetter.css'


export default function NewsLetter() {
  return (
    <div className='newsletter'>
      <div className="newsletter-container">
        <h4>Newsletter</h4>
        <h3>Sign up for latest updates and offer</h3>
        <div className="newsletter-form">
          <input type="email" name='email'placeholder='Email Address'/>
          <button>Subscribe</button>
        </div>
        <p>Will be used in accordance with our Privacy Police</p>
        <div className="newsletter-socialIcons">
          <div className="icon">
            <FaFacebook />
          </div>
          <div className="icon">
            <FaInstagram />
          </div>
          <div className="icon">
            <FaLinkedin />
          </div>
          <div className="icon">
            <FaTwitter />
          </div>
    
        </div>
      </div>
    </div>
  )
}
