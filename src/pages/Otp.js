import React, { useState } from 'react';
import '../styles/global.css';
import '../styles/otp.css';
import Footer from '../components/footer';
import Lottie from 'react-lottie';
import animationData from '../assets/Animations/otp.json';
import Header from '../components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useSnackbar } from '../components/Snackbar';

function Otp() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };
    

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '65%',
        textAlign: 'center',
    };

    const location = useLocation();
    const navigate = useNavigate();
    const { email, otp, password } = location.state || {}; // Destructure password from location.state
    const [enteredOTP, setEnteredOTP] = useState('');
    const showSnackbar = useSnackbar();
    console.log(email);
    console.log(password); // Access password from location.state
    console.log(otp);
  
    const handleOTPVerification = () => {
        if (enteredOTP === otp.toString()) {
          const { email, password } = location.state || {};
          if (email && password) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                showSnackbar('Signed up successfully');
                navigate('/profile');
              })
              .catch((error) => {
                console.error('Error signing up:', error.code, error.message);
                showSnackbar('Error signing up:', error.message);
              });
          } else {
            showSnackbar('Error verifying OTP');
          }
        } else {
          showSnackbar('Invalid OTP');
        }
      };

    
  

  return (
    <>
    <Header></Header>
    <div className='otp_section'>
        <div className='otp_animation'>
            <div style={containerStyle}>
                <Lottie options={defaultOptions}/>
            </div>
        </div>
        <div className='otp_Input'>
            <h1 className='heading'>Verify Your Email</h1>
            <p className='bio'>Enter the one-time password <span className='highlight'>(OTP)</span><br></br> sent to your email to verify your identity.</p>
            <br></br>
            <input value={enteredOTP} className="checkout-input" type="text" name="Otp" placeholder="123456" onChange={(e) => setEnteredOTP(e.target.value)} />
            <br></br>
            <button onClick={handleOTPVerification}>Verify</button>
        </div>
    </div>
  
    <Footer></Footer>
   </>
  );
}

export default Otp;
