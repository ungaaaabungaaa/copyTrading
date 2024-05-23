import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css'

const Footer = () => {

    return (
        <>
        <footer className="footer">
            <div className="copyRight_section">
                <small>© 2024 CopyTrade. All rights reserved</small>
            </div>
            <div className='footer_links_section'>
            <Link className='links' to="/terms">Terms</Link>
            <Link className='links' to="/privacy">Privacy</Link>
            <Link className='links' to="/contact">Contact</Link>
            </div>
        </footer>
        </>
    );
};


export default Footer;