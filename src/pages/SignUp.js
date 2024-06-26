import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'; // Import Firebase authentication functions
import '../styles/signUp.css'
import Footer from '../components/footer';
import Header from '../components/Header'
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
import animationData from '../assets/Animations/signup.json';
import { useSnackbar } from '../components/Snackbar';
import emailjs from 'emailjs-com';

function SignUp() {
  const showSnackbar = useSnackbar();
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const sendOTPEmail = (email, otp, password) => {
    const serviceID = "service_kdn514c";
    const templateID = "template_9kk5dsc";
    const publicKey = "IQ0PiyYnm0Omxegb1";
  
    const templateParams = {
      to_email: email, // Make sure this matches the expected parameter in your EmailJS template
      otp: otp
    };
  
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('OTP sent to your email', response.status, response.text);
        showSnackbar('OTP sent to your email');
        navigate('/otp', { state: { email, otp, password } });
      }, (error) => {
        console.log('FAILED...', error);
        setError(error.message);
        showSnackbar('Error', error.message);
      });
  };

  

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      showSnackbar('Passwords do not match');
      return;
    }

  const otp = generateOTP();
    sendOTPEmail(email, otp, password);
  };

  const handleGoogleSignUp = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      showSnackbar('Signed up successfully with Google');
      navigate('/profile'); 
    } catch (error) {
      setError(error.message);
      showSnackbar('Error signing up with Google:', error.message);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSignUp();
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '41vw',
    textAlign: 'center',
  };

  return (
    <>
      <Header></Header>
      <div className="signUp_Section">
        <div className="signUp_animation">
          <div style={containerStyle}>
            <Lottie options={defaultOptions} />
          </div>
        </div>
        <div className="signUp_container">
          <h1>
            Join Trades<span className="highlight">Hub</span>
          </h1>
          <p className="text-center">
            Seamlessly expand your portfolio by mirroring the trades <br/> executed by our most successful master trader
          </p>
          <br />
          <div className="login_form">
            <input autoComplete="email" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="signUp_input" onKeyDown={handleKeyDown} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="signUp_input" onKeyDown={handleKeyDown} />
            <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} className="signUp_input" onKeyDown={handleKeyDown}/>
            <br />
            <button onClick={handleSignUp} className="signUp_btn">
              Signup
            </button>
            <p>Or</p>
            <button className="login_btn" onClick={handleGoogleSignUp}>
              Sign Up with Google
            </button>
            <br />
            <p>
              Don't have an Account? <span className="highlight" onClick={() => navigate('/login')}>Login</span>
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer></Footer>
    </>
  );
}

export default SignUp;
