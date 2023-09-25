import "./HeroImgStyles.css";
import React from 'react';
import LaptopImg from "../assets/laptopimg.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
  <div className="hero">
    <div className="mask">
        <img className="into-img" src={LaptopImg} alt="introimg"></img>
        </div>
        <div className="content">
            <p>HI, I'M A FRESHER.</p>
            <h1>FULL STACK Developer</h1>
            <div>
                <Link to="/project" className="btn">Project</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
        </div>
  );
  
};

export default HeroImg;