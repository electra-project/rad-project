import React from 'react'
import './Footer.css'
import Logo from '../Assets/logo.png'
import instagram from '../Assets/instagram_icon.png'
import pintester from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={Logo} alt="logo" />
        <p> Electra </p>
      </div>
      <ul className="footer-links">
        <li> Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
        <li> FAQ</li>
        <li> Privacy Policy</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={instagram} alt="Instagram" />
        </div>
        <div className="footer-icons-container">
            <img src={pintester} alt="pintester" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp} alt="whatsapp" />
        </div>
      </div>
      <div className="footer-copy-right">
        <hr />
            <p> Copy right @ 2023 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
