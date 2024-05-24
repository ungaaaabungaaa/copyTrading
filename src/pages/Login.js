import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase authentication functions
import '../styles/global.css';
import Footer from '../components/footer';
import Header from '../components/Header';
import '../styles/login.css';
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
import animationData from '../assets/Animations/login.json';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  
  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/profile'); 
    } catch (error) {
      console.error('Error signing in:', error.message);
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
    width: '57%',
    textAlign: 'center',
  };

  return (
    <>
      <Header />
      <div className="login_section">
        <div className="login_animation">
          <div style={containerStyle}>
            <Lottie options={defaultOptions} />
          </div>
        </div>
        <div className="login_container">
          <h1>
            Welcome to Trades<span className="highlight">Hub</span>
          </h1>
          <p className="text-center">
            Effortlessly grow your portfolio by copying the trades of our <br /> top-performing master trader
          </p>
          <br />
          <div className="login_form">
            <input type="text" placeholder="Email" className="login_input" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" className="login_input" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button className="login_btn" onClick={handleLogin}>
              Login
            </button>
            <br />
            <p>
              Don't have an Account ? <span className="highlight" onClick={() => navigate('/signup')}>Signup</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
