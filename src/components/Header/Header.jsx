import React from 'react';
import './Header.css';
import { HiOutlineShoppingCart } from "react-icons/hi";
// HiOutlineShoppingCart

const Header = () => {
    return (
        <div className="header-container">
            <h1>Fake Store</h1>
            <HiOutlineShoppingCart className="shopping-cart-icon" />
        </div>
    );
};

export default Header;