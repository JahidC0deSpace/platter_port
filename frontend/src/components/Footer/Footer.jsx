import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
    const date =new Date().getFullYear();
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" className='logo' />
                <p>Sizzling flavors, doorstep delivery—order now and taste the fresh, hot goodness you’ve been craving!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policey</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+8801819902081</li>
                    <li>platterplort@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright {" "} {date} &copy; PlatterPort.com-All Right Reserved
        </p>
    </div>
  )
}

export default Footer