import mongoose from "mongoose";

const productSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "Product name is required"],
	},
	sellingPrice: {
		type: Number,
		required: [true, "Selling Price is required"],
	},
	mrp: {
		type: Number,
		required: [true, "MRP is required"],
	},
	color: {
		type: String,
		required: false,
	},
	size: {
		type: String,
		required: false,
	},
	imageSrc: {
		type: String,
		required: [true, "Image is required"],
	},
});

export default mongoose.model("Product", productSchema);
