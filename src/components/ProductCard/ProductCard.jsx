import { useEffect, useState, useContext} from 'react';
import './ProductCard.css';
import { FaHeart, FaRegHeart } from "react-icons/fa"
// import { BiSolidHeartCircle } from "react-icons/bi";
import {FavoritesContext} from "../../Context/Context.jsx";



const ProductCard = ({ product }) => {
    // start with var for icons
    // const isFavorite = false;
    const [isSelected, setIsSelected] = useState(false);
    // access the Global context. Use {} not []
    const {favorites, addProduct, removeProduct} = useContext(FavoritesContext);

    //need use effect to set the value of isSelected
    useEffect(
        ()=>{
            //is already this product selected?
            setIsSelected(favorites.find(item=>item.id === product.id))
        }, [favorites]
    )

    return (
        <div className="product-card">
            <div className="image-container">
                {
                    isSelected?
                        <FaHeart className="prod-heart-icon"
                        onClick={()=>removeProduct(product.id)}/>
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