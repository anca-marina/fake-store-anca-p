//import React from 'react';
import './ProductCard.css';
import { FaHeart, FaRegHeart } from "react-icons/fa"
import {useContext} from "react";
import {FavoritesContext} from "../../Context/Context.jsx";



const ProductCard = ({ product }) => {
    // start with var for icons
    const isFavorite = false;
    // access the Global context. Use {} not []
    const {favorites, addProduct} = useContext(FavoritesContext);

    return (
        <div className="product-card">
            <div className="image-container">
                {
                    isFavorite?
                        <FaHeart className="prod-heart-icon" />
                        :
                        <FaRegHeart className="prod-heart-icon"
                        onClick={()=>addProduct(product)}/>
                }
                <img src={product.image}/>
            </div>
            <a href={`/products/${product.id}`}>
                <p className="product-title ellipsis-text">{product.title}</p>
                <p className="product-category">{product.category}</p>
                <p className="product-price">{product.price}€</p>
            </a>
        </div>
    );
};

export default ProductCard;