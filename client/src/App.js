import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./Component/Cart";
import Home from "./Component/Home";
import { Login } from "./Component/Login";
import { Nav } from "./Component/Nav";
import { Signup } from "./Component/Signup";
import { AddProduct } from "./Component/AddProduct";
import { Checkout } from "./Component/Checkout";

function App() {
	const [cartProducts, setCartProducts] = useState([]);
	console.log(cartProducts);
	const [user, setUser] = useState(null);
	return (
		<>
			<Nav user={user} setUser={setUser} cart={cartProducts.length} />
			<Routes>
				<Route
					path="/"
					element={<Home user={user} setCartProducts={setCartProducts} />}
				/>
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login setUser={setUser} />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route
					path="/cart"
					element={
						<Cart
							cartProducts={cartProducts}
							setCartProducts={setCartProducts}
						/>
					}
				/>
				<Route path="/admin" element={<AddProduct />} />
			</Routes>
		</>
	);
}

export default App;
