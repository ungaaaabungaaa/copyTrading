import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/Animations/loader.json';

const SplashScreen = () => {
  
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
    height: '55vh',
    textAlign: 'center',
  };

    return (
     <div style={containerStyle}>
      <Lottie options={defaultOptions}/>
    </div>
  );
};

export default SplashScreen;