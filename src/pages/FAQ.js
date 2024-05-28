import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import '../styles/faq.css';
import '../styles/hero3.css';
import Lottie from 'react-lottie';
import animationData from '../assets/Animations/FAQ.json';

function Faq() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionsData = [
        {
            "header": "What is TradesHub?",
            "content": "TradesHub is a platform that allows users to copy trades made by experienced traders and potentially earn a 10% return on their deposit. It provides a convenient way for individuals to engage in trading without needing extensive knowledge or experience in the financial markets."
        },
        {
            "header": "How does TradesHub work?",
            "content": "TradesHub works by connecting users with skilled traders who share their trading strategies on the platform. Analyze their performance history, and choose to copy their trades. When a trader executes a trade, it is automatically replicated in the user's account proportionally to their investment. If the trade is successful, users can potentially earn a 10% return on their deposit."
        },
        {
            "header": "Is TradesHub safe and secure?",
            "content": "TradesHub ensures the safety and security of user funds through rigorous security measures and transparent operations. Users can feel confident in the platform's reliability."
        },
        {
            "header": "How do I get started with TradesHub?",
            "content": "To get started with TradesHub, simply sign up for an account on our platform. Once registered, you can explore the available traders, review their performance, and start copying trades that align with your investment goals."
        },
        {
            "header": "What are the fees associated with using TradesHub?",
            "content": "TradesHub charges a nominal fee for each trade copied by users. This helps support the platform's operations and ensures the quality of services provided to our users."
        },
        {
            "header": "Who can benefit from TradesHub?",
            "content": "TradesHub is ideal for individuals who want to invest in the financial markets but lack the time or expertise to trade independently. It's also suitable for those looking to diversify their investment strategies by leveraging the skills of experienced traders."
        },
        {
            "header": "What types of trades can I copy on TradesHub?",
            "content": "TradesHub offers a wide range of trading options, including stocks, forex, commodities, and cryptocurrencies. Users can select the types of trades that best match their investment preferences and risk tolerance."
        },
        {
            "header": "Can I stop copying a trader at any time?",
            "content": "Yes, users have the flexibility to stop copying a trader whenever they choose. This allows you to manage your investments actively and adjust your strategies as needed."
        },
        {
            "header": "How are traders selected and verified on TradesHub?",
            "content": "TradesHub carefully vets and verifies all traders on the platform to ensure they have a proven track record of success. Traders undergo a rigorous selection process that includes performance evaluation and background checks."
        }
    ];
    

    return (
        <>
            <Header />
            <div className='faq_section'>
                <div className='faq_accordation'>
                    <h1 className='heading'>FAQ</h1>
                    <p className='bio'>
                        Trade With Confidence for a promised return, knowing your <br /> 
                        funds are <span className='highlight'>secure</span> in your account
                    </p>

                    {accordionsData.map((accordion, index) => (
                        <div key={index} className="accordion">
                            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                                {accordion.header}
                            </div>
                            <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
                                <p>{accordion.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='faq_animation'>
                    <div className='containerStyle3'>
                        <Lottie options={defaultOptions} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Faq;
