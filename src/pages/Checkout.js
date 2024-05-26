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
            <div className='checkout_form_section'>
                <h1 className='heading'>Cryptocurrency <span className='highlight'>Checkout</span></h1>
                <p className='bio'>Deposit a minimum of <span className='highlight'>$250</span> for our trading services.</p>
            <div className='checkout_form'>
                <input className="checkout-input" type="text" placeholder="Name"/>
                <input className="checkout-input" type="email" placeholder="Email"/>
                <input className="checkout-input" type="text" placeholder="Contact"/>
                <input className="checkout-input" type="text" placeholder="$ Amount"/>
                <select className="checkout-select">
                <option value="">service</option>
                <option value="MultiplX">MultiplX</option>
                <option value="Earning Pool">Earning Pool</option>
                </select>
                <select className="checkout-select">
                <option value="">Cryptocurrency</option>
                <option value="Bitcoin">Bitcoin (BTC)</option>
                <option value="Ethereum">Ethereum (ETH) </option>
                <option value="Litecoin">Litecoin (LTC)</option>
                <option value="Bitcoin Cash">Bitcoin Cash (BCH)</option>
                <option value="USD Coin">USD Coin (USDC)</option>
                <option value="Dai">Dai (DAI)</option>
                </select>
                <br></br>
                <button>Depoist</button>
            </div>
            </div>


        </div>
        <Footer></Footer>
        </>
    ); 
}


export default Checkout;