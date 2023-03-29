import React, { useEffect, useState } from "react";
import { Product } from "./Product";
import axios from "axios";

const Home = ({ setCartProducts, user }) => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get("http://localhost:4000/api/products");
			if (data.success) {
				setProducts(data.products);
			}
		};
		fetchProducts();
	}, []);
	return (
		<>
			<div className="font-semibold text-4xl text-center mt-8">PRODUCTS</div>
			<Product
				user={user}
				products={products}
				setCartProducts={setCartProducts}
			/>
		</>
	);
};

export default Home;
