import React from 'react';
import './Footer.css';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer-container">
            <p>Made with <FaHeart className="heart-icon"/> by Anca Petrea</p>
            <button>Contact Us</button>
        </div>
    );
};

export default Footer;