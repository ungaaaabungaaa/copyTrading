import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/Animations/404.json';

const NotFoundPage = () => {
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
    width: '23%',
    textAlign: 'center',
  };

  const containerStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    textAlign: 'center',
  };
  

  return (
    <>
    <div style={containerStyle2}>
        <div style={containerStyle}>
      <Lottie options={defaultOptions}/>
       </div>
    </div>
    </>
  );
};

export default NotFoundPage;