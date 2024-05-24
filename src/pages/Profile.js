import React, { useState } from 'react';
import '../styles/global.css';
import '../styles/profile.css';
import Footer from '../components/footer';
import Header from '../components/Header';
import Lottie from 'react-lottie';
import animationData from '../assets/Animations/profile.json';
import { useAuth } from '../contexts/AuthContext'; // Assuming you have an authentication context
import { auth, db } from '../firebase'; // Import auth and db directly

const Profile = () => {
    const { currentUser } = useAuth(); // Assuming you have access to the current user
    console.log(currentUser)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const containerStyle = {
        width: '10vw',
    };

    const [firstName, setFirstName] = useState('');
    const [country, setCountry] = useState('');
    const [expertise, setExpertise] = useState('');

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
            await db.collection('profiles').doc(currentUser.uid).set({
                fullName: firstName,
                country: country,
                expertise: expertise,
                isComplete: true
            });
            console.log('Profile details successfully saved to Firestore!');
        } catch (error) {
            console.error('Error saving profile details:', error);
        }
    };

    return (
        <>
            <Header />
            <div className="profile_section">
                <div style={containerStyle}>
                    <Lottie options={defaultOptions} />
                </div>
                <div className='profile_form_title'>
                    <h1>Complete your profile</h1>
                    <p>Let's get to know you better.</p>
                    <br></br>
                    <form onSubmit={handleSubmit} className='profile_form'>
                        <div className="form-group">
                            <input className='profile-input' type="text" placeholder="Full Name" value={firstName} onChange={handleFirstNameChange} />
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
                        <button className='submit_button' type="submit">Submit</button>
                        <p>Need Any Help? <span className='highlight'>Contact Us</span></p>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Profile;
