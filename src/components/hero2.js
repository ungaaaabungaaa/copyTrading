import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/Animations/hero2.json';

const Hero2 = () => {
  
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
    width: '76%',
    textAlign: 'center',
    marginTop: '8%',
  };
    return (
    <>
    
    <div style={containerStyle}>
      <Lottie options={defaultOptions}/>
    </div>
    </>
  );
};

export default Hero2;