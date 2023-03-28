import React from "react";

export const Cart = () => {
	return (
		<div className="flex flex-col mx-auto max-w-3xl p-6 space-y-4 sm:p-10">
			<h2 className="text-xl font-semibold">Your cart</h2>
			<ul className="flex flex-col divide-y divide-gray-700">
				{products.map((product) => (
					<li
						key={product.id}
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
										<p className="text-sm">{product.color}</p>
									</div>
									<div className="text-right">
										<p className="text-lg font-semibold">{product.price}</p>
									</div>
								</div>
								<div className="flex text-sm divide-x">
									<button
										type="button"
										className="flex items-center px-2 py-1 pl-0 space-x-1"
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
					<span className="font-semibold"> ₹48,967</span>
				</p>
			</div>
			<div className="flex justify-end space-x-4">
				<button type="button" className="px-6 py-2 border rounded-md">
					Back
					<span className="sr-only sm:not-sr-only"> to shop</span>
				</button>
				<button type="button" className="px-6 py-2 border rounded-md">
					<span className="sr-only sm:not-sr-only">Continue to</span> Checkout
				</button>
			</div>
		</div>
	);
};

const products = [
	{
		id: 1,
		name: "APPLE iPhone 11 (White, 128 GB)",
		href: "#",
		price: "₹47,199",
		originalPrice: "₹48,900",
		discount: "5% Off",
		color: "White",
		size: "6.1 inch",
		imageSrc:
			"https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/shopping-cart/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=90",
	},
	{
		id: 2,
		name: "Syska 20000 mAh Power Bank",
		href: "#",
		price: "₹1,549",
		originalPrice: "₹2,499",
		discount: "38% off",
		color: "Black",
		leadTime: "3-4 weeks",
		size: "20000 mAh",
		imageSrc:
			"https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/shopping-cart/p2024j-bk-p2024j-20000-syska-original-imafz4zuunbw3mfu.jpeg?q=70",
	},
	{
		id: 3,
		name: "Back Cover for Apple Iphone 11",
		href: "#",
		price: "₹219 ",
		originalPrice: "₹999",
		discount: "78% off",
		color: "Black",
		imageSrc:
			"https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/shopping-cart/linetpu-029-012-101-gadgetm-original-imag7ayekbkvfu4f.jpeg?q=70",
	},
];
