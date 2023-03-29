import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Cart = ({ cartProducts, setCartProducts }) => {
	const [total, setTotal] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		let total = 0;
		cartProducts.forEach((product) => {
			total += product.sellingPrice * product.qty;
		});
		setTotal(total);
	}, [cartProducts]);

	const handleRemoveCart = (id) => {
		const newCartProducts = cartProducts.filter(
			(product) => product._id !== id
		);
		setCartProducts(newCartProducts);
	};

	const handleOrder = async () => {
		const orderItems = cartProducts.map((product) => {
			return {
				name: product.name,
				qty: product.qty,
				image: product.imageSrc,
				price: product.sellingPrice,
			};
		});
		console.log(orderItems);
		const { data } = await axios.post("http://localhost:4000/api/order", {
			orderItems,
			isPaid: false,
		});
		if (data.success) {
			setCartProducts([]);
			navigate("/checkout");
		}
	};

	return (
		<div className="flex flex-col mx-auto max-w-3xl p-6 space-y-4 sm:p-10">
			<h2 className="text-xl font-semibold">Your cart</h2>
			<ul className="flex flex-col divide-y divide-gray-700">
				{cartProducts?.map((product) => (
					<li
						key={product._id}
						className="flex flex-col py-6 sm:flex-row sm:justify-between"
					>
						<div className="flex w-full space-x-2 sm:space-x-4">
							<img
								className="flex-shrink-0 object-contain w-20 h-20 rounded outline-none sm:w-32 sm:h-32"
								src={product.imageSrc}
								alt={product.name}
							/>
							<div className="flex flex-col justify-between w-full pb-4">
								<div className="flex justify-between w-full pb-2 space-x-2">
									<div className="space-y-1">
										<h3 className="text-lg font-semibold leading-snug sm:pr-8">
											{product.name}
										</h3>
										<p className="text-sm">Quantity: {product.qty}</p>
									</div>
									<div className="text-right">
										<p className="text-lg font-semibold">
											₹ {product.sellingPrice}
										</p>
									</div>
								</div>
								<div className="flex text-sm divide-x">
									<button
										type="button"
										className="flex items-center px-2 py-1 pl-0 space-x-1"
										onClick={() => handleRemoveCart(product._id)}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
											className="w-4 h-4 fill-current"
										>
											<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
											<rect width="32" height="200" x="168" y="216"></rect>
											<rect width="32" height="200" x="240" y="216"></rect>
											<rect width="32" height="200" x="312" y="216"></rect>
											<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
										</svg>
										<span>Remove</span>
									</button>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
			<div className="space-y-1 text-right">
				<p>
					Total amount:
					<span className="font-semibold"> ₹ {total}</span>
				</p>
			</div>
			<div className="flex justify-end space-x-4">
				<button
					onClick={() => navigate("/")}
					type="button"
					className="px-6 py-2 border rounded-md"
				>
					Back to shop
				</button>
				<button
					onClick={handleOrder}
					type="button"
					className="px-6 py-2 border rounded-md"
				>
					Order
				</button>
			</div>
		</div>
	);
};
