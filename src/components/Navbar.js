import { Link, useLocation } from "react-router-dom";
import shoppingCart from "../imgs/shopping-cart.svg";
import styles from "../styles/navbar.css"
import globalStyles from "../styles/global.css";


function Navbar({ items, quantity, setCartActive }) {
    let location = useLocation();

    return (
        <nav className="navbar">
            <div className="logo">
                <h2>XLUSV</h2>
            </div>
            <ul className="nav-links">
                <li><Link to="/" className={"nav-link " + (location.pathname === "/" ? "active" : "")}>Home</Link></li>
                <li><Link to="shop" className={"nav-link " + (location.pathname === "/shop" ? "active" : "")}>Shop</Link></li>
                <li><Link to="about" className={"nav-link " + (location.pathname === "/about" ? "active" : "")}>About</Link></li>
            </ul>
            <div className="cart-section" onClick={() => setCartActive(true)}>
                <button className="open-cart">
                    <img src={shoppingCart} alt="Shopping Cart" className="cart-pic"/>
                </button>
                {(quantity !== 0) && <i className="quantity-icon">{quantity}</i>}
            </div>
        </nav>
    );
}

export default Navbar;