import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Shop from "./components/Shop.js";

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {CartContext} from  "./contexts/CartContext.js";

function App() {
	const [items, setItems] = useState([]);
	const [quantity, setQuantity] = useState(0);

	const addItem = (newItem) => {
		const itemExists = items.find((item) => item.name === newItem.name);

		if (itemExists) {
			const otherItems = items.filter((item) => item.name !== newItem.name);
			const itemCopy = {...itemExists};
			itemCopy.quantity += 1;
			setItems([...otherItems, itemCopy]);
		}
		else {
			setItems(items.concat({
				name: newItem.name,
				price: newItem.price,
				image: newItem.image,
				quantity: 1,
			}));
		}
		setQuantity(quantity + 1);
	};

	useEffect(() => {
		console.log(items.length);
	});

	return (
		<div className="App">
			<Navbar items={items} quantity={quantity}/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="shop" element={
				<CartContext.Provider value={{ addItem }}>
					<Shop />
				</CartContext.Provider>} />
			</Routes>
		</div>
	);
}

export default App;
