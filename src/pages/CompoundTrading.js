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
import '../styles/hero2.css';
import { useNavigate } from 'react-router-dom';



function CompoundTrading()
{
  const navigate = useNavigate(); // Initialize the useNavigate hook
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
    
    <div className='compound_trading_section' >

    
    <div className='compoundTrading_Animation_Section'>
      <div className='containerStyle2'>
          <Lottie options={defaultOptions2}/>
      </div>
      <h1 className='heading'>Compound Trading <span className='highlight' > MultiplX </span> </h1>
      <p className='bio'>Maximize your investment potential with our Compound Trading  Try it now and see how <br/> your investments can <span className='highlight' >grow exponentially!</span></p>
      <br className='blanks'></br>
      <button onClick={() => navigate('/checkout')} >Start Now</button>
    </div>


    <div className='compoundTrading_Calculator_Section' >
      <CompoundingCalculator></CompoundingCalculator>
    </div>

  

    </div>

    <Footer></Footer>
    </>
  ); 
}


export default CompoundTrading;