import React, {useEffect, useState} from 'react';
import './Homepage.css';
import axios from "axios";
import ProductCard from "../components/ProductCard/ProductCard.jsx";

const Homepage = () => {
    // create state to hold the products data
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setProductsCategory] = useState([]);
    // show all products when the page is loading
    // https://fakestoreapi.com/products
    // set up the useEffect when the page loads
    useEffect(
        () =>{
            console.log('homepage loaded')
            // make the api call to get the data
            axios.get(`https://fakestoreapi.com/products`)
                .then(res => {
                    console.log(res.data)
                    //store this data in state
                    setProducts(res.data)
                })
                .catch(err => console.log(err));
            getCategories()
        }, [])

    // Where do I get the data?
    // https://fakestoreapi.com/products/categories
    // What I need to do with this data? To store it and display it as buttons on the Homepage

    const getCategories = () => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const selectCategory = (category) => {
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then(response => {
                console.log(response)
                setProductsCategory(response.data);
                })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="homepage-container">
            <div className="category-list">
                {['All', ...categories].map(category => (
                    <p key={category} onClick={() => selectCategory(category)}>{category}</p>
                ))}
            </div>
            <div className="products-container">
                {category.length === 0
                    ? products.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))
                    : category.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))}
            </div>
        </div>
    );
};

export default Homepage;