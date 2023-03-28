import React from "react";

export const Product = () => {
	return (
		<div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:mt-10 px-[40px] py-8">
			{products.map((product) => (
				<div
					key={product.id}
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
								{product.price}
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

const products = [
	{
		id: 1,
		brand: "Apple",
		name: "APPLE iPhone 13 (Midnight, 128 GB)",
		imageSrc:
			"https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
		href: "#",
		price: "₹61,999",
		color: "Midnight",
		imageAlt: "APPLE iPhone 13 (Midnight, 128 GB)",
		quantity: 1,
		ratings: "12,873",
	},
	{
		id: 1,
		brand: "Apple",
		name: "APPLE iPhone 13 (Midnight, 128 GB)",
		imageSrc:
			"https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
		href: "#",
		price: "₹61,999",
		color: "Midnight",
		imageAlt: "APPLE iPhone 13 (Midnight, 128 GB)",
		quantity: 1,
		ratings: "12,873",
	},
	{
		id: 1,
		brand: "Apple",
		name: "APPLE iPhone 13 (Midnight, 128 GB)",
		imageSrc:
			"https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
		href: "#",
		price: "₹61,999",
		color: "Midnight",
		imageAlt: "APPLE iPhone 13 (Midnight, 128 GB)",
		quantity: 1,
		ratings: "12,873",
	},
	{
		id: 1,
		brand: "Apple",
		name: "APPLE iPhone 13 (Midnight, 128 GB)",
		imageSrc:
			"https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
		href: "#",
		price: "₹61,999",
		color: "Midnight",
		imageAlt: "APPLE iPhone 13 (Midnight, 128 GB)",
		quantity: 1,
		ratings: "12,873",
	},
	{
		id: 1,
		brand: "Apple",
		name: "APPLE iPhone 13 (Midnight, 128 GB)",
		imageSrc:
			"https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
		href: "#",
		price: "₹61,999",
		color: "Midnight",
		imageAlt: "APPLE iPhone 13 (Midnight, 128 GB)",
		quantity: 1,
		ratings: "12,873",
	},
	{
		id: 2,
		brand: "Apple",
		name: "APPLE Airpods Pro Bluetooth Headset",
		imageSrc:
			"https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/mwp22hn-a-apple-original-imag3qe9eqkfhmg8.jpeg?q=70",
		href: "#",
		price: "₹22,500",
		color: "White, True Wireless",
		imageAlt: "APPLE Airpods Pro Bluetooth Headset",
		quantity: 1,
		ratings: "8,381",
	},
	{
		id: 3,
		brand: "Apple",
		name: "APPLE iPad (9th Gen) 64 GB ROM 10.2 inch",
		imageSrc:
			"https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
		href: "#",
		price: "₹29,900",
		color: "Space Grey",
		imageAlt: "APPLE iPad (9th Gen) 64 GB ROM 10.2 inch",
		quantity: 1,
		ratings: "1,530",
	},
	// More products...
];
