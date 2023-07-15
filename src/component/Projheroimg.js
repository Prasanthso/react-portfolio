import React from 'react';
import "./Heroimg.css";
import { Link } from "react-router-dom";

import ProjIntroImg from "../assets/projectimg.jpg";

const Projheroimg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={ProjIntroImg} alt='ProjectImg'/>
      </div>
      <div className='content'>
        <p>Hi,I'M,</p>
        <h1>Web Developer.</h1>
        <div>
          <Link to="/about" className='btn'>About</Link>
        </div>
      </div>
    </div>
  )
}

export default Projheroimg
