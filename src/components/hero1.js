import React from 'react';
import Lottie from 'react-lottie';
import '../styles/hero1.css'
import animationData from '../assets/Animations/hero1.json';

const Hero1 = () => {
  
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

export default Hero1;