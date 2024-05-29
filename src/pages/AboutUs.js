import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import '../styles/aboutus.css'
import Lottie from 'react-lottie';
import animationData from '../assets/Animations/aboutus.json';
import '../styles/hero2.css'


function AboutUs()
{
    
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
        <Header></Header>
        <div className='about_us_section'>
            <div className='about_us_titles'>
                <h1 className='heading'>About <span className='highlight'>Us</span></h1>
                <p>Welcome to <span className="highlight">TradeShub</span>, your trusted partner in trading success. At <span className="highlight">TradeShub</span>, we specialize in innovative trading services designed to help you maximize your investment potential.<br /> Our platform offers a variety of unique solutions to cater to diverse trading needs and preferences.</p>
                <p>With our <span className="highlight">Copy Trading</span> service, you can effortlessly mirror the trades of our expert master traders. By following their strategies, you can benefit from their experience and expertise, optimizing your trading outcomes without the need for constant monitoring.</p>
                <p>Our <span className="highlight">Compound Trading</span> service allows you to lock in your funds for specific periods of 3, 6, or 9 months to earn substantial returns.<br /> Additionally, you receive monthly returns through our <span className="highlight">MultiPlex</span> program, enhancing your investment growth over time.</p>
                <p>Experience daily trading with our <span className="highlight">Pool Trading</span> service, where your funds are traded daily.<br /> You can track your daily profits or losses, giving you real-time insights into your trading performance.</p>
                <p>At <span className="highlight">TradeShub</span>, our mission is to provide reliable and profitable trading solutions that empower you to achieve your financial goals.<br /> Join us today and take the first step towards smarter trading!</p>
            </div>
            <div className='about_us_animations'>
            <div className='containerStyle2'>
                <Lottie options={defaultOptions}/>
             </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    ); 
}


export default AboutUs;