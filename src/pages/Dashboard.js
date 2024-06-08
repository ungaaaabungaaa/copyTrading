import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/footer'; // Corrected import
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
    const { currentUser } = useAuth();
    const showSnackbar = useSnackbar();

    // State variables to hold profile data
    const [totalMoney, setTotalMoney] = useState(0);
    const [depositAmount, setDepositAmount] = useState(0);
    const [profit, setProfit] = useState(0);
    const [depositDate, setDepositDate] = useState('N/A');
    const [profitDate, setProfitDate] = useState('N/A');
    const [ReferralURL, setReferralUrl] = useState('https://tradeshub.com/ref/Blank');
    const [DailyProfits, setDailyProfits] = useState(0);

    useEffect(() => {
        const fetchProfile = async () => {
            if (currentUser) {
                const docRef = doc(db, 'profiles', currentUser.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const profileData = docSnap.data();
                    setTotalMoney(profileData.totalMoney || 0);
                    setDepositAmount(parseFloat(profileData.depositAmount) || 0);
                    setProfit(profileData.profit || 0);
                    setDepositDate(profileData.depositDate || 'N/A');
                    setProfitDate(format(new Date(), 'MMM dd, yyyy')); // Use current date for profit date
                    setReferralUrl(profileData.ReferralUrl);
                    setDailyProfits(profileData.DailyProfits || 0);
                } else {
                    showSnackbar('Profile data not found');
                }
            }
        };
        fetchProfile();
    }, [currentUser, showSnackbar]);

    return (
        <>
            <Header />
            <div className="container">
                <div className="My-Money">
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
                            <p>Profit since {profitDate}</p>
                        </div>
                    </div>
                </div>
                <div className="Profits">
                    <DoughnutChart deposit={depositAmount} profit={profit} />
                </div>
                <div className="Daily-Profits">
                    <h4>{DailyProfits}<span className='highlight'>%</span></h4>
                    <h1>Daily Profit's </h1>
                </div>
                <div className="LeaderBoard">
                    <RankList />
                </div>
                <div className="referal">
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
