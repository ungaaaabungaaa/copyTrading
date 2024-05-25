import React, { useRef } from 'react';
import '../styles/global.css';
import '../styles/contact.css'
import Lottie from 'react-lottie';
import animationData from '../assets/Animations/contact.json';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/footer'


function Contact()
{

    const form = useRef();    
    function sendMail(e) {
        e.preventDefault();
        // Get form input values
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var message = document.getElementById("message").value.trim();
        // Validate form inputs
        if (name === "") {
            alert("Please enter your name.");
            return;
        }
      
        if (email === "") {
            alert("Please enter your email address.");
            return;
        } else if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        if (message === "") {
            alert("Please enter your message.");
            return;
        }
      
        // If all inputs are valid, proceed to send email
        var params = {
            name: name,
            email: email,
            message: message,
        };
      
        const serviceID = "service_kdn514c"; // Replace with your EmailJS service ID
        const templateID = "template_0gxeqvi"; 
        const publicKey ="IQ0PiyYnm0Omxegb1"; 
      

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Clear form fields and show thank you message
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("There was an error sending your email. Please try again later.");
        },
      );

    }

    function isValidEmail(email) {
        // Simple email validation regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }



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
        width: '55%',
        textAlign: 'center',
      };



    return (
        <>
        <Header></Header>
        <div className='contactSection'>
            <div className='contactTitle'>
                <h1>Get in Touch</h1>
                <p>Have a question or want to work together? <span className='highlight'>Send us a message</span></p>
                <div className="contact-info">
                    <ul>
                        <li><i className="fas fa-envelope"></i>Tradeshub.Crypto@ud.me</li>
                    </ul>
                </div>
                <div style={containerStyle}>
                <Lottie options={defaultOptions}/>
                </div>
                <br/>
                <br/>
            </div>
            <div className='contactCard'>
                <br/>
                <h1>Contact Us</h1>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                <br/>
                <form id="contactForm" ref={form} onSubmit={sendMail}>
                        <label htmlFor="name">Name</label> <br/>  <br/>
                        <input type="text" placeholder='Name' id="name" name="name"/>  <br/>  <br/>
                        <label htmlFor="email">Email Address</label>  <br/>  <br/>
                        <input placeholder='Email' type="email" id="email" name="email"/>  <br/>  <br/>
                        <label htmlFor="message">Message</label>  <br/>  <br/>
                        <textarea placeholder='Enter Your Message' id="message" name="message"></textarea><br/><br/>
                        <button type="submit">Send</button>
                </form>
            </div>
        </div>
        <Footer></Footer>
        </>
    ); 
}


export default Contact;