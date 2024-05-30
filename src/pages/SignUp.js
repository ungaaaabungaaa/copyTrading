import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'; // Import Firebase authentication functions
import '../styles/signUp.css'
import Footer from '../components/footer';
import Header from '../components/Header'
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
import animationData from '../assets/Animations/signup.json';
import { useSnackbar } from '../components/Snackbar';

function SignUp() {
  const showSnackbar = useSnackbar();
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        showSnackbar('Signed up successfully, Enter Your Details');
        navigate('/profile'); // Route to profile after sign up
      })
      .catch((error) => {
        setError(error.message);
        showSnackbar('Error:', error.message);
      });
  };

  const handleGoogleSignUp = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/profile'); 
    } catch (error) {
      setError(error.message);
      showSnackbar('Error signing up with Google:', error.message);
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
            <input autocomplete="email" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="signUp_input" />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="signUp_input"/>
            <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} className="signUp_input"/>
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
