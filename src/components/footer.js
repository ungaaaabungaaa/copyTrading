import React from 'react';
import '../styles/footer.css'

const Footer = () => {

    return (
        <>
        <footer className="footer">
            <div className="copyRight_section">
                <small>© 2024 CopyTrade. All rights reserved</small>
            </div>
            <div className='footer_links_section'>
                <p>Terms</p>
                <p>Privacy</p>
                <p>Contact</p>
            </div>
        </footer>
        </>
    );
};


export default Footer;