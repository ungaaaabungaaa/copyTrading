import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import '../styles/dashboard.css';
import '../styles/hero3.css';
import RankList from '../components/RankList';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { format } from 'date-fns';
import { doc, getDoc } from 'firebase/firestore';
import { useSnackbar } from '../components/Snackbar';
import DoughnutChart from '../components/DoughnutChart';



function Dashboard() {


    const deposit = 200;
    const profits = 23.2;

    // Get the current date
    const today = new Date();
    // Format the date as "MMM dd, yyyy"
    const formattedDate = format(today, 'MMM dd, yyyy');

    const { currentUser } = useAuth();
    const showSnackbar = useSnackbar();

    // State variables to hold profile data
    const [totalMoney, setTotalMoney] = useState(0);
    const [depositAmount, setDepositAmount] = useState(0);
    const [profit, setProfit] = useState(0);
    const [depositDate, setDepositDate] = useState('N/A');
    const [profitDate, setProfitDate] = useState('N/A');
    const [ReferralURL , setReferralUrl] = useState('https://tradeshub.com/ref/Blank');
    const [DailyProfits, setDailyProfits] = useState(0);

    useEffect(() => {
        const fetchProfile = async () => {
            if (currentUser) {
                const docRef = doc(db, 'profiles', currentUser.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const profileData = docSnap.data();
                    setTotalMoney(profileData.totalMoney || 0);
                    setDepositAmount(parseFloat(profileData.depositAmount) || 0); // Ensure depositAmount is a number
                    setProfit(profileData.profit || 0);
                    setDepositDate(profileData.depositDate || 'N/A');
                    setProfitDate(formattedDate);
                    setReferralUrl(profileData.ReferralUrl);
                    setDailyProfits(profileData.DailyProfits);
                } else {
                    showSnackbar('Profile data not found');
                }
            }
        };
        fetchProfile();
    }, [currentUser]);

    
    return (
        <>
            <Header />
            <div class="container">
                <div class="My-Money">
                    <div className='userdata'>
                        <div className='dashboard_card_1'>
                            <h3>My Money</h3>
                            <h1 className='highlight'>${totalMoney.toFixed(2)}</h1>
                            <p>Deposited on {depositDate}</p>
                        </div>
                        <div className='dashboard_card_2'>
                            <h3>Deposited</h3>
                            <h1 className='highlight'>${depositAmount.toFixed(2)}</h1>
                            <p>Deposited on {depositDate}</p>
                        </div>
                        <div className='dashboard_card_3'>
                            <h3>Profit</h3>
                            <h1 className='highlight'>${profit.toFixed(2)}</h1>
                            <p>Profit since {formattedDate}</p>
                        </div>
                    </div>
                </div>
                <div class="Profits">
                    <DoughnutChart deposit={deposit} profit={profits} />
                </div>
                <div class="Daily-Profits">
                    <h4>{DailyProfits}<span className='highlight'>%</span></h4>
                    <h1>Daily Profit's </h1>
                </div>
                <div class="LeaderBoard">
                    <RankList></RankList>
                </div>
                <div class="referal">
                    <h1 className='heading'>Referral <span className='highlight'>Program</span></h1>
                    <p className='bio'>Earn rewards for referring new traders to our platform. Share your unique referral link and get a commission for every new trader that signs up</p>
                    <p className='Referral_Program_box'>{ReferralURL}</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
