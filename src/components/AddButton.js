import styles from "../styles/addbtn.css";
import globalStyles from "../styles/global.css";
import { CartContext } from "../contexts/CartContext.js";
import { useContext } from "react";

function AddButton({ shoe }) {
    const { addItem } = useContext(CartContext);

    return (
        <button className="add-btn" onClick={() => {addItem(shoe)}}>
            ADD TO CART
        </button>
    );

}

export default AddButton;