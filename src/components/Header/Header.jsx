import React from 'react';
import './Header.css';
import { HiOutlineShoppingCart } from "react-icons/hi";
// HiOutlineShoppingCart
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/");
    };

    return (
        <div className="header-container">
            <h1 onClick={handleHomeClick}>Fake Store</h1>
            <HiOutlineShoppingCart className="shopping-cart-icon" />
        </div>
    );
};

export default Header;