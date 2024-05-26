import React from 'react';
import Lottie from 'react-lottie';
import Header from '../components/Header';
import Footer from '../components/footer';
import '../styles/checkout.css'
import '../styles/hero3.css'
import animationData from '../assets/Animations/checkout.json';

function Checkout()
{
    // add in forms 
    // add in login to trigger and capture details from coinbase api 
    // deploy cloud function as well 
    // on successfull direct them to dashboard 

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
        <div className='checkout_section'>
            <div className='checkout_animation'>
            <div className='containerStyle3'>
                <Lottie options={defaultOptions}/>
            </div>
            </div>
            <div className='checkout_form'>
                <h1 className='heading'>Cryptocurrency <span className='highlight'>Checkout</span></h1>
                <p className='bio'>Deposit a minimum of <span className='highlight'>$250</span> for our trading services.</p>
            </div>

        </div>
        <Footer></Footer>
        </>
    ); 
}


export default Checkout;