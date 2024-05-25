import React from 'react';
import '../styles/global.css';
import Footer from '../components/footer';
import Header from '../components/Header'
import '../styles/invest.css'
import Lottie from 'react-lottie';
import '../styles/hero1.css'
import animationData from '../assets/Animations/invest.json';

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
                <div className='containerStyle'>
                    <Lottie options={defaultOptions}/>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    ); 
}


export default InvestingTrading;