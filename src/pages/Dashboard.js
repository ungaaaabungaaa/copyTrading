import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import '../styles/dashboard.css'
import { format } from 'date-fns';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useSnackbar } from '../components/Snackbar';

function Dashboard() {
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
            <div className='dashboard'>
                <div className='dashboard_hero'>
                    <div className='dashboard_card_1'>
                        <p>My Money</p>
                        <h1 className='highlight'>${totalMoney.toFixed(2)}</h1>
                        <p>Deposited on {depositDate}</p>
                    </div>
                    <div className='dashboard_card_2'>
                        <p>Deposited</p>
                        <h1 className='highlight'>${depositAmount.toFixed(2)}</h1>
                        <p>Deposited on {depositDate}</p>
                    </div>
                    <div className='dashboard_card_3'>
                        <p>Profit</p>
                        <h1 className='highlight'>${profit.toFixed(2)}</h1>
                        <p>Profit since {formattedDate}</p>
                    </div>
                </div>
                
                <div className='Referral_Program'>
                    <h1 className='heading'>Referral <span className='highlight'>Program</span></h1>
                    <p className='bio'>Earn rewards for referring new traders to our platform. Share your unique referral link and get a commission for every new trader that signs up</p>
                    <p className='Referral_Program_box'>https://copytrading.com/ref/johndoe</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
