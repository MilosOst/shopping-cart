import styles from "../styles/cart.css";
import globalStyles from "../styles/global.css";
import CartItem from "./CartItem.js";
import { Link } from "react-router-dom";

function Cart({ items, setCartActive }) {


    return (
        <div className="cart-modal">
        <div className="cart-backdrop"></div>
            <div className="cart-area">
                <button className="close-btn" onClick={() => setCartActive(false)}>+</button>
                <h2 className="cart-title">Your Shopping Cart</h2>
                <div className="cart-items">
                    {items.map((item) => {
                        return <CartItem key={item.name} item={item}/>
                    })}
                </div>
                <Link to="/" className="checkout">
                    <button className="checkout-btn" onClick={() => setCartActive(false)}>CHECKOUT</button>
                </Link>
            </div>
        </div>
    );


}

export default Cart;