import React from 'react';
import '../styles/global.css';
import Footer from '../components/footer';
import Header from '../components/Header'
import '../styles/invest.css'
import Lottie from 'react-lottie';
import '../styles/hero2.css'
import animationData from '../assets/Animations/invest.json';
import animationData2 from '../assets/Animations/rocket.json';

function InvestingTrading()
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
        <div className='invest_section'>
            <div className='invest_title'>
                <h1 className='heading'>Invest Daily, Earn Daily</h1>
                <p className='bio'>Grow your wealth with our daily trading platform. Deposit <br></br> funds and watch your profits accumulate daily.</p>
                <button>Get Started</button>
            </div>
            <div className='invest_animation'>
                <div className='containerStyle2'>
                    <Lottie options={defaultOptions}/>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>

        <div className='invest_section2'>
            <div className='invest_animation2'>
            <div className='containerStyle2'>
                    <Lottie options={defaultOptions2}/>
                </div>
            </div>
            <div className='invest_title2'>
                <h1 className='heading'>Today's Profit</h1>
                <br></br>
                <br></br>
                <h2>8.1 <span className='highlight'>%</span></h2>
                <p>Our advanced trading strategies generate consistent daily profits, <br></br> allowing you to grow your wealth over time.</p>
                <button>Start Now</button>
            </div> 
        </div>
        <br className='blanks' ></br>
        <br className='blanks' ></br>
        <Footer></Footer>
        </>
    ); 
}


export default InvestingTrading;