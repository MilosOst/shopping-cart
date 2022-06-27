import styles from "../styles/shop.css";
import globalStlyes from "../styles/global.css";

import AddButton from "./AddButton.js";

function ShopItem({ shoe }) {

    return (
        <div className="shop-item">
            <div className="img-box">
                <img src={shoe.image} alt={shoe.alt} className="item-img" />
            </div>
            <h2 className="item-name">{shoe.name}</h2>
            <h3 className="item-price">${shoe.price}</h3>
            <AddButton shoe={shoe}/>
        </div>
    );
}

export default ShopItem;