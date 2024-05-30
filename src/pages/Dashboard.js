import React from 'react';
import Lottie from 'react-lottie';
import Header from '../components/Header';
import Footer from '../components/footer';
import '../styles/dashboard.css'


function Dashboard()
{

    // add in profit and timer for profit tracking 
    // add in withdraw option 
    // add in check in renderer for login , profile and depoist for dashboard to appear 
    // deploy it on web3 as well 

    return (
        <>
        <Header></Header>
        <div className='dashboard'>
            
            
            <div className='dashboard_hero'>
                
            </div>
            
            <div className='Referral_Program'>
               <h1 className='heading'>Referral <span className='highlight'>Program</span></h1>
               <p className='bio'>Earn rewards for referring new traders to our platform. Share your unique referral link and get a commission for every new trader that signs up</p>
               <p className='Referral_Program_box'>https://copytrading.com/ref/johndoe</p>
            </div>
        </div>
        <Footer></Footer>
        </>
    ); 
}

export default Dashboard;