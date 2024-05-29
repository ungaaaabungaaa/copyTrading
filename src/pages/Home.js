import React from 'react';
import Footer from '../components/footer';
import Header from '../components/Header'
import '../styles/global.css';
import '../styles/home.css';
import Hero1 from '../components/hero1';
import Hero2 from '../components/hero2';
import Hero3 from '../components/hero3';
import Hero4 from '../components/hero4';
import List from '../components/list';

import { useSnackbar } from '../components/Snackbar';

function Home()
{
    const handleButtonClick = () => {
      window.location.href = 'https://i.bybit.com/OabQq5O?action=inviteToCopy';
    };

    const DepoistData = [
      { name: 'Aarav Patel', amount: Math.floor(Math.random() * 1000) },
      { name: 'Neha Gupta', amount: Math.floor(Math.random() * 1000) },
      { name: 'Vivek Sharma', amount: Math.floor(Math.random() * 1000) },
      { name: 'Ishaan Kumar', amount: Math.floor(Math.random() * 1000) },
      { name: 'Ananya Singh', amount: Math.floor(Math.random() * 1000) },
      { name: 'Advik Jain', amount: Math.floor(Math.random() * 1000) },
      { name: 'Diya Trivedi', amount: Math.floor(Math.random() * 1000) },
      { name: 'Aryan Desai', amount: Math.floor(Math.random() * 1000) },
      { name: 'Riya Reddy', amount: Math.floor(Math.random() * 1000) },
      { name: 'Kabir Chatterjee', amount: Math.floor(Math.random() * 1000) }
    ];

    return (
      <>
      <Header></Header>
      <div className='hero_1'>
        <Hero1></Hero1>
        <h1 className='heading'>Copy Trades,<span className='highlight'> Grow Your Wealth</span></h1>
        <p className='bio'>effortlessly grow your portfolio by copying the trades of our <br /> top-performing <span className='highlight'>master trader.</span></p>
        <button onClick={handleButtonClick} >Start Now</button>
        <br></br>
      </div>
      <br/>
      <div className='hero_2'>
        <div className="hero_2_animation">
        <Hero2 ></Hero2>
        </div>
        <div className='hero_2_titles'>
            <h1 className='heading'>Effortless Wealth <span className='highlight'>Building,</span></h1>
            <p className='bio'>Our copy trading platform makes it easy to grow your wealth by automatically <span className='highlight' >copying</span> the trades of our top-performing master trader.</p>
        </div>
      </div>
      <br/>
      <div className='hero_1'>
        <Hero3></Hero3>
        <h1 className='heading'>Start Copying Trades <span className='highlight'>Today</span></h1>
        <p className='bio'>Join our community of successful traders and start <br /> growing your <span className='highlight'>wealth</span> with our copy trading platform.</p>
        <button onClick={handleButtonClick} >Join In</button>
        <br></br>
      </div>
      <div className='hero_3'>
        <div className='hero_4_depoist'>
            <h1>Last <span className='highlight'>Deposits</span></h1>
            <List data={DepoistData} />
        </div>
        <div className='hero_4_animations'>
            <Hero4></Hero4>
            <h1>Secured InvestMent <span className='highlight'>Plan</span></h1>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
        
      <Footer></Footer>
      </>
  ); 
}


export default Home;