//import React from 'react';
import './ProductCard.css';


const ProductCard = ({product}) => {
    return (
        <div className="product-card">
            <div className="image-container">
                <img src={product.image}/>
            </div>
            <a href="#">
                <p className="product-title ellipsis-text">{product.title}</p>
                <p className="product-category">{product.category}</p>
                <p className="product-price">{product.price}€</p>
            </a>
        </div>
    );
};

export default ProductCard;