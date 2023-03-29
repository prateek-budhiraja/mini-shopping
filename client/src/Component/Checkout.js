import React from "react";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
	const navigate = useNavigate();
	return (
		<section className="container mx-auto px-10 md:px-0 py-10">
			<div className="mx-auto max-w-2xl text-center">
				<h1 className="text-blac text-5xl font-semibold mb-4">
					Your Order is Placed
				</h1>
				<blockquote className="mt-10 text-xl text-gray-900">
					<p>Thank you for shopping with us. We will send you a confirmation</p>
				</blockquote>
				<button
					onClick={() => navigate("/")}
					type="button"
					className="px-6 py-2 border rounded-md mt-8"
				>
					Continue Shopping
				</button>
			</div>
		</section>
	);
};
