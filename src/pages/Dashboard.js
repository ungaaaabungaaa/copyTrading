import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import '../styles/dashboard.css';
import '../styles/hero3.css';
import RankList from '../components/RankList';

function Dashboard() {
    

   

   
    return (
        <>
            <Header />
            <div class="container">
                <div class="My-Money"></div>
                <div class="Profits"></div>
                <div class="Daily-Profits">
                    <h4>8.1 <span className='highlight'>%</span></h4>
                    <p>Daily Profit's </p>
                </div>
                <div class="LeaderBoard">
                    <RankList></RankList>
                </div>
                <div class="referal">
                    <h1 className='heading'>Referral <span className='highlight'>Program</span></h1>
                    <p className='bio'>Earn rewards for referring new traders to our platform. Share your unique referral link and get a commission for every new trader that signs up</p>
                    <p className='Referral_Program_box'>https://tradeshub.com/ref/test</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
