import React from 'react';
import "./Heroimg.css";
import { Link } from "react-router-dom";

import IntroImg from "../assets/home.jpg";

const Heroimg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={IntroImg} alt='IntroImg'/>
      </div>
      <div className='content'>
        <p>Hi,I'M PRASANTH,</p>
        <h1>Web Developer.</h1>
        <div>
          <Link to="/about" className='btn'>About</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg
