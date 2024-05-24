import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/Animations/hero3.json';

const Hero3 = () => {
  
    const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
    };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '26%',
    textAlign: 'center',
  };
    return (
    <>
    
    <div style={containerStyle}>
      <Lottie options={defaultOptions}/>
    </div>
    </>
  );
};

export default Hero3;