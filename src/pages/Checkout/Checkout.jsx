import {useContext} from 'react';
import "./Checkout.css"
import {FavoritesContext} from "../../Context/Context.jsx";
import { BsTrash } from "react-icons/bs";




const Checkout = () => {
    // this page shows all the selected products

    // access the Global context. Use {} not []
    const {favorites, removeProduct} = useContext(FavoritesContext);

    //Calculate the total of the shopping basket
    const total = favorites.reduce((acc, item) => acc + item.price, 0).toFixed(2);

    const handleRemoveProduct = (productId) => {
        removeProduct(productId);
    };



    return (
        <div className="shopping-cart-page">
            <div className="shopping-cart-container">
                <table>
                    <thead>
                        <tr>
                            <th id="item">Item</th>
                            <th id="price">Price</th>
                            <th id="quantity">Quantity</th>
                            <th id="remove">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {favorites.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="empty-message" style={{ textAlign: 'center', display:"table-cell"}}>No selected products yet</td>
                                <td></td>
                            </tr>
                        ) : (
                            favorites.map((item, key) => (
                                <tr key={key}>
                                    <td>
                                        <img src={item.image} alt={item.title} className="product-image" />
                                        {item.title}
                                    </td>
                                    <td>{item.price + "€"}</td>
                                    <td>1</td>
                                    <td>
                                        <BsTrash className="trash-icon" style={{ height: "41px", width: "32px"}}
                                                 onClick={() => handleRemoveProduct(item.id)}/>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
                {favorites.length > 0 && (
                    <div className="checkout-footer">
                        <p>Total &nbsp; &nbsp; {total + "€"}</p>
                        <button>Checkout</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Checkout;