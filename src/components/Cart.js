import styles from "../styles/cart.css";
import globalStyles from "../styles/global.css";
import CartItem from "./CartItem.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Cart({ items, setCartActive, addItem, removeItem, total }) {


    

    return (
        <div className="cart-modal">
        <div className="cart-backdrop"></div>
            <div className="cart-area">
                <h2 className="cart-title">Your Shopping Cart</h2>
                <div className="cart-items">
                    {items.map((item) => {
                        return <CartItem key={item.name} item={item} addItem={addItem} removeItem={removeItem}/>
                    })}
                </div>
                <h2 className="cart-total">Total: ${total}</h2>
                <Link to="/" className="checkout">
                    <button className="cart-btn checkout-btn" onClick={() => setCartActive(false)}>CHECKOUT</button>
                </Link>
                <button className="cart-btn close-btn" onClick={() => setCartActive(false)}>CLOSE</button>
            </div>
        </div>
    );


}

export default Cart;