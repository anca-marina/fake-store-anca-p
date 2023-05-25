import React, {useEffect} from 'react';
import './ProductDetails.css'
import axios from "axios";
import {useParams} from "react-router-dom";


const ProductDetails = () => {
    // Show the details of the clicked product
    // the product id is in
    const {productId} = useParams();
    const [product, setProduct] = React.useState('');

    useEffect(
        () => {
            axios.get(`https://fakestoreapi.com/products/${productId}`)
                .then(response => {
                    console.log(response.data);
                    setProduct(response.data);
                })
                .catch( error => console.log(error))
        }, []
    )



    return (
        <div className="product-page">
            <div className="product-detail-container">
                <img src={product?.image} alt="Product"/>
                <div className="product-details">
                    {/*title / price / description /*/}
                    <h3>{product?.title}</h3>
                    <p className="product-price">{product?.price}€</p>
                    <h4>Description</h4>
                    <p>{product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;