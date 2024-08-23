import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import pinterest_icon from '../Assets/pinterest_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt='' />
        <p>ZIVA COLLECTIONS</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={instagram_icon}alt='' />
        </div>
        <div className="footer-icons-container">
            <img src={pinterest_icon}alt='' />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon}alt='' />
        </div>
      </div>
   <div className="footer-copyright"></div>
   <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
    </div>
  )
}

export default Footer