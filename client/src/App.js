import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./Component/Cart";
import Home from "./Component/Home";
import { Login } from "./Component/Login";
import { Nav } from "./Component/Nav";
import { Signup } from "./Component/Signup";
import { AddProduct } from "./Component/AddProduct";

function App() {
	const [user, setUser] = useState(null);
	return (
		<>
			<Nav user={user} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/admin" element={<AddProduct />} />
			</Routes>
		</>
	);
}

export default App;
