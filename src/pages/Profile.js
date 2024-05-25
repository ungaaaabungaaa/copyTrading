import React, { useState, useEffect } from 'react';
import '../styles/global.css';
import '../styles/profile.css';
import Footer from '../components/footer';
import Header from '../components/Header';
import Lottie from 'react-lottie';
import animationData from '../assets/Animations/profile.json';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const Profile = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const [firstName, setFirstName] = useState('');
  const [country, setCountry] = useState('');
  const [expertise, setExpertise] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      if (currentUser) {
        const docRef = doc(db, 'profiles', currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const profileData = docSnap.data();
          setFirstName(profileData.fullName || '');
          setCountry(profileData.country || '');
          setExpertise(profileData.expertise || '');
          setIsUpdating(true);
        }
      }
    };
    fetchProfile();
  }, [currentUser]);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleExpertiseChange = (event) => {
    setExpertise(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await setDoc(doc(db, 'profiles', currentUser.uid), {
        fullName: firstName,
        country: country,
        expertise: expertise,
        isComplete: true,
      });
      console.log('Profile details successfully saved to Firestore!');
      navigate('/'); // Redirect to a new page after profile completion
    } catch (error) {
      console.error('Error saving profile details:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="profile_section">
        <div>
          <Lottie options={defaultOptions} style={{ width: '10vw' }} />
        </div>
        <div className="profile_form_title">
          <h1>Complete your profile</h1>
          <p>Let's get to know you better.</p>
          <br />
          <form onSubmit={handleSubmit} className="profile_form">
            <div className="form-group">
              <input
                className="profile-input"
                type="text"
                placeholder="Full Name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
              <select value={country} onChange={handleCountryChange}>
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
                <option value="UAE">UAE</option>
                <option value="Singapore">Singapore</option>
                <option value="Switzerland">Switzerland</option>
              </select>
              <select value={expertise} onChange={handleExpertiseChange}>
                <option value="">Select Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="pro">Pro Trader</option>
              </select>
            </div>
            <button className="submit_button" type="submit">
              {isUpdating ? 'Update' : 'Upload'}
            </button>
            <p>
              Need Any Help?{' '}
              <span onClick={() => navigate('/contact')} className="highlight">
                Contact Us
              </span>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
