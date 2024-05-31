import React, { useState } from 'react';
import Lottie from 'react-lottie';
import Header from '../components/Header';
import Footer from '../components/footer';
import '../styles/checkout.css';
import '../styles/hero3.css';
import animationData from '../assets/Animations/checkout.json';
import BTC_QR from '../assets/Qr/BTC.jpeg';
import ETH_QR from '../assets/Qr/ETH.jpeg';
import XRP_QR from '../assets/Qr/XRP.jpeg';
import USDT_QR from '../assets/Qr/USDT.jpeg';

function Checkout() {
    const [selectedWallet, setSelectedWallet] = useState('');
    const [qrCode, setQrCode] = useState(null);
    const [isOrVisible, setIsOrVisible] = useState(false);  // State to manage visibility of "Or"

    const BTC = 'bc1qjut7vs5eu8vk20muzw7aksjr6v4h9u6rz45nml';
    const ETH = '0x9dacAE246Ec02dd580C7620489A1729c3896f9a1';
    const XRP = 'rJPWTdgsenS1MhjBs8oC5RestwZCRUcQf7';
    const USDT = 'TGVqEUdhmsLbetDpjUpgSutkAu8AH1QfE7';

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
                        <input className="checkout-input" type="text" placeholder="Name" />
                        <input className="checkout-input" type="email" placeholder="Email" />
                        <input className="checkout-input" type="text" placeholder="Contact" />
                        <input className="checkout-input" type="text" placeholder="$ Amount" />
                        <select className="checkout-select">
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
                        <button>Next</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Checkout;
