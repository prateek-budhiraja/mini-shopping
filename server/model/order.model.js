import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		orderItems: [
			{
				name: { type: String, required: [true, "Name is required"] },
				qty: { type: Number, required: [true, "Quantity is required"] },
				image: { type: String, required: [true, "Image is required"] },
				price: { type: Number, required: [true, "Price is required"] },
				product: {
					type: mongoose.Schema.Types.ObjectId,
					required: true,
					ref: "Product",
				},
			},
		],
		isPaid: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Order", orderSchema);
