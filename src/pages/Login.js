import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'; // Import Firebase authentication functions
import '../styles/global.css';
import Footer from '../components/footer';
import Header from '../components/Header';
import '../styles/login.css';
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
import animationData from '../assets/Animations/login.json';
import { useSnackbar } from '../components/Snackbar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const showSnackbar = useSnackbar();

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); 
    } catch (error) {
      showSnackbar('Error signing in:', error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/'); 
    } catch (error) {
      showSnackbar('Error signing in with Google:', error.message);
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
    height: '92%',
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
            <input autocomplete="email" type="text" placeholder="Email" className="login_input" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" className="login_input" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button className="login_btn" onClick={handleLogin}>
              Login
            </button>
            <p>Or</p>
            <button className="login_btn" onClick={handleGoogleSignIn}>
              Sign In with Google
            </button>
            <br />
            <p>
              Don't have an Account ? <span className="highlight" onClick={() => navigate('/signup')}>Signup</span>
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
}

export default Login;
