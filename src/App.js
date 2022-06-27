import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Shop from "./components/Shop.js";
import Cart from "./components/Cart.js";

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {CartContext} from  "./contexts/CartContext.js";

function App() {
	const [items, setItems] = useState([]);
	const [quantity, setQuantity] = useState(0);
	const [cartActive, setCartActive] = useState(false);
	const [total, setTotal] = useState(0);

	const addItem = (newItem) => {
		const itemsCopy = [...items];
		const itemExists = itemsCopy.find((item) => item.name === newItem.name);

		if (itemExists) {
			itemExists.quantity += 1;
			setItems(itemsCopy);
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

	const removeItem = (item) => {
		if (item.quantity === 1) {
			const updatedItems = items.filter((element) => element.name !== item.name);
			setItems(updatedItems);
		}
		else {
			const itemsCopy = [...items];
			const targetItem = itemsCopy.find((element) => element.name === item.name);
			targetItem.quantity -= 1;
			setItems(itemsCopy);
		}
		setQuantity(quantity - 1);
	};

	useEffect(() => {
		const calculateTotal = () => {
			let currTotal = 0;
            for (let item of items) {
                currTotal += item.price * item.quantity;
            }
			setTotal(currTotal);
        }
		
        calculateTotal();
	}, [items]);

	return (
		<div className="App">
			<Navbar items={items} quantity={quantity} setCartActive={setCartActive}/>
			{cartActive &&
				<Cart
				items={items}
				setCartActive={setCartActive}
				addItem={addItem}
				removeItem={removeItem}
				total={total}
				/>}
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
