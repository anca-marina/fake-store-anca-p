import './Header.css';
import { HiOutlineShoppingCart } from "react-icons/hi";
// HiOutlineShoppingCart
import { useNavigate } from "react-router-dom";
import {FavoritesContext} from "../../Context/Context.jsx";
import {useContext} from "react";

const Header = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/");
    };

    const {favorites} = useContext(FavoritesContext);
    const itemCount = favorites.length;

    console.log("The total no. of products:" + itemCount);

    // creating handleShoppingCartClick
    const handleShoppingCartClick = () => {
        navigate("/shoppingCart")
    }

    return (
        <div className="header-container">
            <h1 onClick={handleHomeClick}>Fake Store</h1>
            <div className="shopping-cart-wrapper" onClick={handleShoppingCartClick}>
                <HiOutlineShoppingCart className="shopping-cart-icon" />
                {itemCount > 0 && <span className="item-count">{itemCount}</span>}
            </div>

        </div>
    );
};

export default Header;