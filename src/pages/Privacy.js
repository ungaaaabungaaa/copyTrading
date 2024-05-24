import React from 'react';
import '../styles/global.css';
import '../styles/privacy.css';
import Footer from '../components/footer';
import Lottie from 'react-lottie';
import animationData from '../assets/Animations/privacy.json';
import Header from '../components/Header';

function Privacy() {

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
    height: '45vh',
  };

  return (
                <>
                <Header></Header>
                <br />
                <br />
                <div className='privacy_section'>
                  <div style={containerStyle}>
                    <Lottie options={defaultOptions}/>
                  </div>
                <div className='privacy'>
                <h1>Privacy <span class="highlight">& </span>Policy</h1>
                <p>
                    This Privacy Policy describes how TradesHub.crypto ("TradesHub", "we", "us", or "our") collects, uses, and shares your
                    personal information when you access or use our copy trading services ("Services"). By accessing or using our Services,
                    you agree to the terms of this Privacy Policy.
                </p>
                <br />
                <br />
                <h2>Information We Collect</h2>
                <p>Personal Information When you register an account with us, we may collect personal information such as your name, email
                address, contact information, and documentation for identity verification purposes. <br />
                Usage Data We collect information about your interactions with our Services, including the trades you execute and your
                interactions with other users. <br />
                Device Information We may collect information about the device you use to access our Services, including your IP
                address, browser type, and operating system. <br />
                Cookies and Tracking Technologie .We use cookies and similar tracking technologies to analyze trends, administer the
                website, track users' movements around the website, and gather demographic information about our user base. We also use
                cookies for marketing purposes, including retargeting and tracking user interactions with our advertisements..</p>
                <br />
                <br />
                <h2>How We Use Your Information</h2>
                <p>
                    Providing and Improving Our Services: We use the information we collect to provide, maintain, and improve our Services,
                    including executing trades on your behalf and enhancing the user experience. <br />
                    Communications: We may use your contact information to communicate with you about your account, updates to our Services,
                    and promotional offers. You can opt out of receiving promotional communications at any time.<br />
                    Analytics and Research: We use analytics tools, including Google Analytics, to analyze trends, track user behavior, and
                    gather demographic information about our user base. This information helps us improve our Services and tailor our
                    marketing efforts.
                </p>
                <br />
                <br />
                <h2>Sharing Your Information</h2>
                <p>
                Service Providers: We may share your information with third-party service providers who assist us in providing,
                maintaining, and improving our Services. These service providers may have access to your personal information for the
                purpose of performing these tasks on our behalf. <br />
                Legal Compliance: We may disclose your information to comply with applicable laws, regulations, or legal processes, or
                to respond to lawful requests from government authorities. <br />
                Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information
                may be transferred to the acquiring entity.
                </p>
                <br />
                <br />
                <h2>Your Choices </h2>
                <p>
                    Account Information: You can review and update the personal information associated with your account by logging into
                    your account settings.<br />
                    Cookies: Most web browsers are set to accept cookies by default. If you prefer, you can usually adjust your browser
                    settings to disable or reject cookies. However, disabling cookies may affect the functionality of our website.
                </p>
                </div>
                
                </div>
                <br />
                <br />

   <Footer></Footer>
   </>
  );
}

export default Privacy;
