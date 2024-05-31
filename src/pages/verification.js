import React from 'react';
import '../styles/global.css';
import '../styles/privacy.css'
import Footer from '../components/footer';
import Lottie from 'react-lottie';
import animationData from '../assets/Animations/verification.json';
import Header from '../components/Header';
import '../styles/verification.css';
import '../styles/hero3.css';
function Verfication()
{
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
        <Header></Header>
        <div className='verification_section'>
        <h1 className='heading'>verification In <span className='highlight' >Progress</span></h1>
            <p className='bio'>Please Check in 12 Hours </p>
        <div className='privacy_section'>
            <div className='containerStyle'>
              <Lottie options={defaultOptions}/>
            </div>
        </div>
        </div>
        <Footer />
      </>
    ); 
}

export default Verfication;