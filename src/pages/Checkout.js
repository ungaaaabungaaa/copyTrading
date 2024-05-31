import React, { useState } from 'react';
import Lottie from 'react-lottie';
import Header from '../components/Header';
import Footer from '../components/footer';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import '../styles/checkout.css';
import '../styles/hero3.css';
import { useNavigate } from 'react-router-dom';
import animationData from '../assets/Animations/checkout.json';
import BTC_QR from '../assets/Qr/BTC.jpeg';
import ETH_QR from '../assets/Qr/ETH.jpeg';
import XRP_QR from '../assets/Qr/XRP.jpeg';
import USDT_QR from '../assets/Qr/USDT.jpeg';
import { useSnackbar } from '../components/Snackbar';

function Checkout() {
    const { currentUser } = useAuth();
    const [selectedWallet, setSelectedWallet] = useState('');
    const [qrCode, setQrCode] = useState(null);
    const [isOrVisible, setIsOrVisible] = useState(false);  
    const navigate = useNavigate();
    const BTC = 'bc1qjut7vs5eu8vk20muzw7aksjr6v4h9u6rz45nml';
    const ETH = '0x9dacAE246Ec02dd580C7620489A1729c3896f9a1';
    const XRP = 'rJPWTdgsenS1MhjBs8oC5RestwZCRUcQf7';
    const USDT = 'TGVqEUdhmsLbetDpjUpgSutkAu8AH1QfE7';

    const { showSnackbar } = useSnackbar();

    const handleWalletChange = (event) => {
        const selectedOption = event.target.value;
        let walletAddress = '';
        let qrCodeImage = null;

        switch (selectedOption) {
            case 'BTC':
                walletAddress = BTC;
                qrCodeImage = BTC_QR;
                setIsOrVisible(true);
                break;
            case 'ETH':
                walletAddress = ETH;
                qrCodeImage = ETH_QR;
                setIsOrVisible(true);
                break;
            case 'XRP':
                walletAddress = XRP;
                qrCodeImage = XRP_QR;
                setIsOrVisible(true);
                break;
            case 'USDT':
                walletAddress = USDT;
                qrCodeImage = USDT_QR;
                setIsOrVisible(true);
                break;
            default:
                walletAddress = '';
                qrCodeImage = null;
                setIsOrVisible(false);
        }
        setSelectedWallet(walletAddress);
        setQrCode(qrCodeImage);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Save deposit details
            await addDoc(collection(db, 'deposits'), {
                userId: currentUser.uid,
                amount: parseFloat(event.target.elements.amount.value),
                service: event.target.elements.service.value,
                walletType: selectedWallet,
                walletAddress: selectedWallet,
            });
            showSnackbar('Deposit details successfully saved');
            navigate('/verification');
        } catch (error) {
            console.error('Error saving deposit details:', error);
            showSnackbar('Error saving deposit details: ' + error.message, 'error');
        }
    };

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
            <Header />
            <div className='checkout_section'>
                <div className='checkout_animation'>
                    <div className='containerStyle3'>
                        <Lottie options={defaultOptions} />
                    </div>
                </div>
                <div className='checkout_form_section'>
                    <h1 className='heading'>Cryptocurrency <span className='highlight'>Checkout</span></h1>
                    <p className='bio'>Deposit a minimum of <span className='highlight'>$250</span> for our trading services.</p>
                    <div className='checkout_form'>
                        <form onSubmit={handleSubmit}>
                            <input className="checkout-input" type="text" name="amount" placeholder="$ Amount" />
                            <select className="checkout-select" name="service">
                                <option value="">Service</option>
                                <option value="MultiplX">MultiplX</option>
                                <option value="Earning Pool">Earning Pool</option>
                            </select>
                            <select className="checkout-select" onChange={handleWalletChange}>
                                <option value="">Wallet</option>
                                <option value="BTC">BTC</option>
                                <option value="ETH">ETH</option>
                                <option value="XRP">XRP</option>
                                <option value="USDT">USDT TRC20</option>
                            </select>
                            {selectedWallet && <p className='wallet_address'>{selectedWallet}</p>}
                            <p id="or" style={{ display: isOrVisible ? 'block' : 'none' }}>Or</p>
                            {qrCode && <img src={qrCode} alt="QR Code" className='qr_code' />}
                            <br />
                            <br />
                            <button type="submit">Next</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Checkout;
