import React from 'react';
import '../styles/global.css';
import '../styles/compound.css';
import Header from '../components/Header'
import Footer from '../components/footer';
import '../styles/home.css';
import Lottie from 'react-lottie';
import animationData from '../assets/Animations/compound.json';



function compoundTrading()
{
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
    width: '22%',
    textAlign: 'center',
  };

    return (
    <>
    <Header></Header>
    
    <div className='compound_trading_section'>
      <div style={containerStyle}>
        <Lottie options={defaultOptions}/>
      </div>
      <h1 className='heading'>Compound Trading <span className='highlight' > MultiplX </span> </h1>
      <p className='bio'>Maximize your investment potential with our Compound Trading  Try it now and see how <br/> your investments can <span className='highlight' >grow exponentially!</span></p>
      <button>Start Now</button>
    </div>
    <Footer></Footer>
    </>
  ); 
}


export default compoundTrading;