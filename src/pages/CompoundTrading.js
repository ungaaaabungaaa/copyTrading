import React from 'react';
import '../styles/global.css';
import '../styles/compound.css';
import Header from '../components/Header'
import Footer from '../components/footer';
import '../styles/home.css';
import Lottie from 'react-lottie';
import animationData from '../assets/Animations/compound.json';
import animationData2 from '../assets/Animations/compound2.json';
import CompoundingCalculator from '../components/compoundingCalculator';
import '../styles/hero1.css'



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


  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
    };

 
    return (
    <>
    <Header></Header>
    <div className='compound_trading_section'>
      <div className='containerStyle'>
        <Lottie options={defaultOptions2}/>
      </div>
      <h1 className='heading'>Compound Trading <span className='highlight' > MultiplX </span> </h1>
      <p className='bio'>Maximize your investment potential with our Compound Trading  Try it now and see how <br/> your investments can <span className='highlight' >grow exponentially!</span></p>
      <br></br>
      <CompoundingCalculator></CompoundingCalculator>
      <h1 className='heading'>Get Started <span className='highlight' > Now </span> </h1>
      <p className='bio'>Get Montly Returns on your investments & <span className='highlight' >Compouding Reward </span></p>
      <div className='containerStyle'>
        <Lottie options={defaultOptions}/>
      </div>
      <button>Start Now</button>
      <br></br>
      <br></br>
    </div>
    <Footer></Footer>
    </>
  ); 
}


export default compoundTrading;