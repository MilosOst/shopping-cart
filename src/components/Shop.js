import globalStyles from "../styles/global.css";
import styles from "../styles/shop.css";
import ShopItem from "./ShopItem.js";
import nikeShoes from "../data/nike.js";
import jordanShoes from "../data/jordan.js";
import adidasShoes from "../data/adidas.js";
import { useState } from "react";

function Shop({ addItem }) {
    const initialShoes = [...nikeShoes, ...jordanShoes, ...adidasShoes];
    const [shoes, setShoes] = useState(initialShoes);


    return (
        <main className="shop-container">
            <aside className="categories">
                <ul className="category-list">
                    <li className="category-name" onClick={() => setShoes(initialShoes)}>All</li>
                    <li className="category-name" onClick={() => setShoes(nikeShoes)}>Nike</li>
                    <li className="category-name" onClick={() => setShoes(jordanShoes)}>Jordan</li>
                    <li className="category-name" onClick={() => setShoes(adidasShoes)}>Adidas</li>
                </ul>
            </aside>
            <div className="items-grid">
                {shoes.map((shoe) => {
                    return (<ShopItem key={shoe.name} shoe={shoe} />);
                })}
            </div>
        </main>
    );
}

export default Shop;