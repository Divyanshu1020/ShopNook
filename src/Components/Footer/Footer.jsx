import React from 'react';
import { FaEnvelope, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import './Footer.css';
import NewsLetter from './NewsLetter/NewsLetter';

export default function Footer() {
  return (
    <div>
      <NewsLetter />
      <footer className='footer'>
        <div className="footer-container">

          <div className="col">
            <div className="footer-title">About</div>
            <div className="footer-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt libero modi impedit illo assumenda error, repudiandae id adipisci. Eum ipsum vel omnis ullam? Adipisci quae exercitationem libero cupiditate natus.</div>
          </div>


          <div className="col">
            <div className="footer-title">contact</div>
            <div className='footer-item'>
              <div className="item-icon"><FaLocationArrow /></div>
              <div className="footer-text">
                Haritha Nagar, Tippusulthan Nagar, Palakkad, Kerala, 678001
              </div>
            </div>
            <div className='footer-item'>
              <div className="item-icon"><FaMobileAlt /></div>
              <div className="footer-text">
                Phone: 0840 445 8964
              </div>
            </div>
            <div className='footer-item'>
              <div className="item-icon"><FaEnvelope /></div>
              <div className="footer-text">
                Email: divyanshuvishwakarma222@gmail.com
              </div>
            </div>
          </div>


          <div className="col">
            <div className="footer-title">Catagories</div>
            <span className="footer-text">Headphones</span>
            <span className="footer-text">Smart Watch</span>
            <span className="footer-text">Bluetooth Speakers</span>
            <span className="footer-text">Wireless Earbuds</span>
            <span className="footer-text">Home Theatre</span>
          </div>


          <div className="col">
            <div className="footer-title">Pages</div>
            <span className="footer-text">Home</span>
            <span className="footer-text">About</span>
            <span className="footer-text">Privacy Police</span>
            <span className="footer-text">Terms & Conditions</span>
            <span className="footer-text">Contact Us</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
