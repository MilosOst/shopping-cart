import { Link } from "react-router-dom";
import shoppingCart from "../imgs/shopping-cart.svg";
import styles from "../styles/navbar.css"
import globalStyles from "../styles/global.css";
import { useState } from "react";

function Navbar() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <nav className="navbar">
            <div className="logo">
                <h2>XLUSV</h2>
            </div>
            <ul className="nav-links">
                <li><Link to="/" className={"nav-link " + (activeIndex === 0 ? "active" : "")} onClick={() => setActiveIndex(0)}>Home</Link></li>
                <li><Link to="shop" className={"nav-link " + (activeIndex === 1 ? "active" : "")} onClick={() => setActiveIndex(1)}>Shop</Link></li>
                <li><Link to="about" className={"nav-link " + (activeIndex === 2 ? "active" : "")} onClick={() => setActiveIndex(2)}>About</Link></li>
            </ul>
            <div className="cart-section">
                <h3>Cart</h3>
                <img src={shoppingCart} alt="Shopping Cart" className="cart-pic"/>
            </div>
        </nav>
    );
}

export default Navbar;