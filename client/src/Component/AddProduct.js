import React from "react";
import axios from "axios";

export const AddProduct = () => {
	const [product, setProduct] = React.useState({
		name: "",
		size: "",
		color: "",
		mrp: 0,
		price: 0,
		imageSrc: "",
	});

	const handleAddProduct = async () => {
		const { data } = await axios.post(
			"http://localhost:4000/api/products/add",
			{
				name: product.name,
				size: product.size,
				color: product.color,
				mrp: product.mrp,
				sellingPrice: product.price,
				imageSrc: product.imageSrc,
			}
		);
		if (data.success) {
			alert("Product added successfully");
			setProduct({
				name: "",
				size: "",
				color: "",
				mrp: 0,
				price: 0,
				imageSrc: "",
			});
		}
	};

	return (
		<>
			<div className="flex gap-5 pt-[80px] justify-center flex-wrap">
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<label
						className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						htmlFor="productname"
					>
						Product Name
					</label>
					<input
						className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
						type="text"
						id="productname"
						placeholder="Product Name"
						value={product.name}
						onChange={(e) => setProduct({ ...product, name: e.target.value })}
					/>
				</div>
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<label
						className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						htmlFor="size"
					>
						Size
					</label>
					<input
						className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
						type="text"
						id="size"
						placeholder="Size (S, M, L, XL, XXL) give in comma separated"
						value={product.size}
						onChange={(e) => setProduct({ ...product, size: e.target.value })}
					/>
				</div>
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<label
						className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						htmlFor="color"
					>
						Color
					</label>
					<input
						className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
						type="text"
						id="color"
						placeholder="Color (Red, Blue, Green, Yellow) give in comma separated"
						value={product.color}
						onChange={(e) => setProduct({ ...product, color: e.target.value })}
					/>
				</div>
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<label
						className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						htmlFor="mrp"
					>
						MRP
					</label>
					<input
						className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
						type="number"
						id="mrp"
						placeholder="MRP"
						value={product.mrp}
						onChange={(e) => setProduct({ ...product, mrp: e.target.value })}
					/>
				</div>
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<label
						className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						htmlFor="sellingprice"
					>
						Selling Price
					</label>
					<input
						className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
						type="number"
						id="sellingprice"
						placeholder="Selling Price"
						value={product.price}
						onChange={(e) => setProduct({ ...product, price: e.target.value })}
					/>
				</div>
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<label
						className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						htmlFor="imageurl"
					>
						Image URL
					</label>
					<input
						className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
						type="text"
						id="imageurl"
						placeholder="Image URL"
						value={product.imageSrc}
						onChange={(e) =>
							setProduct({ ...product, imageSrc: e.target.value })
						}
					/>
				</div>
			</div>
			<button
				onClick={handleAddProduct}
				className="mt-8 block mx-auto rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
			>
				Add Product
			</button>
		</>
	);
};
