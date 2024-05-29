import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/Animations/hero4.json';
import '../styles/hero4.css';

const Hero4 = () => {
  
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
    <div className='containerStyle4'>
      <Lottie options={defaultOptions}/>
    </div>
    </>
  );
};

export default Hero4;