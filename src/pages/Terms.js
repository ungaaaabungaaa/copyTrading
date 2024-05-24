import React from 'react';
import '../styles/global.css';
import '../styles/privacy.css'
import Footer from '../components/footer';
import Lottie from 'react-lottie';
import animationData from '../assets/Animations/terms.json';
import Header from '../components/Header';
function terms()
{
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
          <br />
          <h1>Terms <span className="highlight">&</span> Conditions</h1>
          <p>
            These Terms and Conditions ("Terms") govern your use of the copy trading services ("Services") provided by
            TradesHub.crypto ("TradesHub", "we", "us", or "our"). By accessing or using our Services, you agree to be bound
            by these Terms. If you do not agree to these Terms, please do not access or use our Services.
          </p>
          <br />
          <h2>1. Description of Services</h2>
          <p>
            Our Services encompass the provision of copy trading services, enabling users to replicate the trades of experienced
            and successful trader with the aim of generating profitable returns. We facilitate this by allowing users to
            connect their trading accounts to our platform, and we execute trades on their behalf based on the strategies and
            trading activities of the selected trader. Our Services cater to a diverse range of trader, from novice
            individuals looking to learn from experienced professionals to seasoned trader seeking to diversify their
            portfolios.
          </p>
          <ul>
            <li>1. Access to a wide pool of experienced and vetted trader across Bybit</li>
            <li>2. Ability to follow trader based on his performance</li>
            <li>3. Weekly monitoring and execution of trades based on trader activities</li>
            <li>4. Comprehensive analytics and reporting tools to track performance and optimize strategies</li>
          </ul>
          <br />
          <h2>2. Account Registration</h2>
          <p>
            To gain access to our Services, users are required to create an account on our website by providing accurate and
            complete information during the registration process. This information may include personal details, contact
            information, and documentation for identity verification purposes.
          </p>
          <br />
          <h2>3. Profit Sharing</h2>
          <p>
            Our copy trading services operate on a profit-sharing model, where we retain a predetermined percentage of the profits
            generated through the execution of trades on behalf of our users. Specifically, we offer copy trading services with a
            profit share of 10% based on the capital in your trading account.
          </p>
          <br />
          <h2>4. Fees & Commission</h2>
          <p>
            In addition to the profit share, we charge a commission of 30% on the profits generated through our copy trading
            services.
          </p>
          <br />
          <p>
                      In addition to the profit share, we charge a commission of 30% on the profits generated through our copy trading
                      services. This commission is deducted from the profits before the profit share is calculated and distributed.
                      <br />
                      For instance, if a trade executed on your behalf generates a profit of $1,000 we would first deduct our commission of
                      $300 (30% of $1,000), leaving a net profit of $700. From this net profit, our profit share of 30% ($210) would be
                      deducted, and you would receive the remaining $490 (70% of $700) as your share of the profit.
                      <br />
                      The commission structure is designed to cover the operational costs associated with providing our Services, including
                      but not limited to technology infrastructure, research and analysis, and customer support.
          </p>
                  <br />
                  <h2>5. Marketing Services</h2>
                  <p>
                      To promote our Services and attract potential users, we may engage in various marketing activities. These activities may
                      include, but are not limited to:
                      <ul>
                          <li>1. Advertising campaigns across various channels, such as search engines, social media platforms, and industry-specific
                          websites</li>
                          <li>2. Email marketing campaigns to inform and educate potential users about our Services and offerings</li>
                          <li>3. Social media promotion and community engagement to build brand awareness and establish a presence in relevant online
                          communities</li>
                          <li>4. Participation in industry events, conferences, and webinars to showcase our Services and connect with potential users</li>
                          <li>5. Strategic partnerships and collaborations with industry influencers, trader, and other relevant entities</li>
                      </ul>
                  </p>
                  <br />
                  <h2>6. Risks </h2>
                  <p>
                      Trading in financial markets, including through the use of copy trading services, involves inherent risks, including the
                      potential for substantial or complete loss of capital. While our Services aim to facilitate profitable trading by
                      leveraging the expertise and strategies of experienced trader, we cannot guarantee any specific results or outcomes.
                      Users should be aware of the following risks associated with our Services:
                      <br />
                      <ul>
                          <li>1.Market Risk: Financial markets are subject to various factors, including economic, political, and regulatory events,
                          which can impact the performance of trader and the overall market conditions.</li>
                          <li>2.Execution Risk: Technical issues, delays, or errors in executing trades can occur, potentially leading to unexpected
                          losses or missed opportunities.</li>
                          <li>3.Liquidity Risk: Certain markets or assets may experience low liquidity, making it difficult to enter or exit positions
                          at desired prices.</li>
                          <li> 4.Leverage Risk:  The use of leverage can amplify both potential profits and losses, increasing the risk of substantial
                          capital loss.</li>
                          <li>5.Systemic Risk: Unforeseen events or system failures can impact the overall functioning of financial markets and trading
                          platforms.</li>
                      </ul>
                  <br />
                  Users are strongly advised to carefully consider their investment objectives, risk tolerance, and financial
                  circumstances before utilizing our Services. It is recommended to seek professional advice from qualified financial
                  advisors or consultants if necessary  
                  </p>
                  <br />
                  <h2>7. Termination</h2>
                  <p>
                      We reserve the right to suspend or terminate a user's access to our Services at any time, with 30-days prior written
                      notice or without liability, for any reason whatsoever, including but not limited to situations where the user breaches
                      these Terms or engages in any unlawful or prohibited activities.
                      <br />
                      In the event of such termination, any outstanding fees, commissions, or profit shares owed to us by the user shall
                      become immediately due and payable. Additionally, we reserve the right to take appropriate legal action to protect our
                      rights and interests.
                      <br />
                  </p>
                  <br />
                  <h2>8. Disclaimer of Warranties</h2>
                  <p>
                      Our Services are provided on an "as is" and "as available" basis, without any warranties of any kind, express or
                      implied. We do not warrant that our Services will be uninterrupted, timely, secure, or error-free.
                      <br />
                      Furthermore, we make no representations or warranties regarding the accuracy, reliability, or completeness of the
                      information or content provided through our Services, including but not limited to the performance and strategies of the
                      trader available for copy trading.
                      <br />
                      Users acknowledge and agree that the use of our Services is at their own risk, and we shall not be liable for any
                      direct, indirect, incidental, or consequential damages arising from or in connection with the use or inability to use
                      our Services.
                      <br />
                  </p>
                  <br />
                  <h2>9. Limitation of Liability</h2>
                  <p>
                      To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental, special,
                      consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any
                      loss of data, use, goodwill, or other intangible losses, resulting from or in connection with:
                      <ul>
                          <li>1. The use or inability to use our Services</li>
                          <li>2. Any conduct or content of any third party, including but not limited to the trader available for copy trading</li>
                          <li>3. Unauthorized access, alteration, or use of your account or personal information</li>
                          <li>4. Statements or conduct of any third party on or related to our Services</li>
                      </ul>
                      Our liability, if any, shall be limited to the amount paid by you for accessing and using our Services during the twelve
                      (12) months preceding the event giving rise to the claim.
                  </p>
                  <br />
                  <h2>10. Indemnification</h2>
                  <p>
                      You agree to indemnify, defend, and hold TradesHub and its affiliates, officers, agents, employees, and partners
                      harmless from and against any and all claims, liabilities, damages (actual and consequential), losses, and expenses
                      (including reasonable attorneys' fees) arising from or in any way related to:
                      <ul>
                          <li>1. Your use or misuse of our Services</li>
                          <li>2. Your violation of these Terms or any applicable laws or regulations</li>
                          <li>3. Your infringement of any intellectual property or other rights of third parties</li>
                          <li>4. Any disputes or claims between you and any third party, including but not limited to the trader available for copy
                          trading</li>
                      </ul>
                      <br />
                      We reserve the right, at our own expense, to assume the exclusive defense and control of any matter subject to
                      indemnification by you, in which case you agree to cooperate with us in asserting any available defenses.
                  </p>
                  <br />
                  <h2>11. Governing Law </h2>
                  <p>
                      These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of
                      law provisions. Any disputes or claims arising out of or in connection with these Terms or the use of our Services shall
                      be subject to the exclusive jurisdiction of the courts located in India.
                  </p>
                  <br />
                  <h2>12. Changes to Terms </h2>
                  <p>
                      We reserve the right, at our sole discretion, to modify or replace these Terms at any time. In the event of a revision,
                      we will provide at least 30 days' advance notice prior to any new terms taking effect. The determination of what
                      constitutes a material change will be made at our sole discretion.<br />
                      Continued use of our Services after the effective date of any revised Terms constitutes your acceptance of the updated
                      Terms. If you do not agree with the revised Terms, your sole remedy is to discontinue the use of our Services. <br />
                      We encourage users to review these Terms periodically to stay informed about any updates or changes <br />
                  </p>
                  <br />
                  <h2>13. Contact Information</h2>
                  <p>
                  If you have any questions, concerns, or inquiries regarding these Terms or our Services, please contact us using the
                  following information: <span class="highlight">TradesHub.Cryoto@gmail.com</span>.
                  </p>
                  <br />
                  <br />
    
        </div>
        </div>
       
        <Footer />
      </>
    ); 
}

export default terms;