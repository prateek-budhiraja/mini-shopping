import React from "react";

export const Product = ({ products }) => {
	return (
		<div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:mt-10 px-[40px] py-8">
			{products.map((product) => (
				<div
					key={product._id}
					className="relative overflow-hidden bg-white border border-gray-200 rounded-xl group"
				>
					<div className="relative ">
						<div className="aspect-w-1 aspect-h-1">
							<img
								className="object-contain w-full h-52 p-4"
								src={product.imageSrc}
								alt={product.imageAlt}
							/>
						</div>

						<div className="px-6 py-4 flex-1 flex flex-col">
							<h3 className="mt-2 text-sm font-medium text-gray-900">
								<a href="#" title="">
									{product.name}
								</a>
							</h3>
							<p className="mt-5 text-sm font-bold text-gray-900">
								₹ {product.sellingPrice}
							</p>
						</div>
					</div>
					<div className="">
						<button
							type="button"
							className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-indigo-600"
						>
							<svg
								className="w-5 h-5 mr-2"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
								/>
							</svg>
							Add to cart
						</button>
					</div>
				</div>
			))}
		</div>
	);
};
