import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/Animations/hero3.json';
import '../styles/hero1.css'

const Hero3 = () => {
  
    const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
    };

 
    return (
    <>
    
    <div className='containerStyle'>
      <Lottie options={defaultOptions}/>
    </div>
    </>
  );
};

export default Hero3;