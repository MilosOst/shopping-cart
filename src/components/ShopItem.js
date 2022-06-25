import AddButton from "./AddButton.js";

function ShopItem({ image, alt, name, price }) {

    return (
        <div className="shop-item">
            <div className="img-box">
                <img src={image} alt={alt} className="item-img"/>
            </div>
            <h2 className="item-name">{name}</h2>
            <h3 className="item-price">{price}</h3>
            <AddButton />
        </div>
    );
}

export default ShopItem;