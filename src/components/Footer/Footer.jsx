import React from 'react';
import './Footer.css';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer-container">
            <p>Made with <FaHeart className="heart-icon"/> by Anca Petrea</p>
            <a href="/contact-us">Contact Us</a>
        </div>
    );
};

export default Footer;