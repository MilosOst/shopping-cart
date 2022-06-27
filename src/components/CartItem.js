import styles from "../styles/cart.css";
import globalStyles from "../styles/global.css";

function CartItem({ item, addItem, removeItem }) {

    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img src={item.image} alt="" />
            </div>
            <div className="cart-item-info">
                <h3 className="cart-item-name">{item.name}</h3>
                <h3 className="item-price">${item.price}</h3>
                <div className="quantity-section">
                    <button className="quantity-btn" onClick={() => removeItem(item)}>-</button>
                    <h3 className="item-quantity">{item.quantity}</h3>
                    <button className="quantity-btn" onClick={() => addItem(item)}>+</button>
                </div>
            </div>
        </div>
    );


}


export default CartItem;