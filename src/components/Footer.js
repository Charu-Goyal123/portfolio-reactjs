import "./FooterStyles.css"
import React from 'react';
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}></FaHome>
                    <div>
                        <p>Kala Kuan, Alwar</p>
                        
                    </div>
                </div>
                <div className="phone">
                    <h4>
                <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}></FaPhone>1-2371-433-22</h4>
                </div>
                <div className="email">
                    <h4>
                <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}></FaMailBulk>info@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About ME</h4>
                <p>To work for an organization which provides me the opportunity to improve my skills and knowledge to growth along with the organization.</p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}></FaFacebook>
                <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}></FaTwitter>
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}></FaLinkedin>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer