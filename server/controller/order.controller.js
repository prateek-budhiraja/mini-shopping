import Order from "../model/order.model.js";

// order controller
// POST /api/order
export const addOrder = async (req, res) => {
	const { isPaid, orderItems } = req.body;
	if (orderItems && orderItems.length === 0) {
		return res.json({
			success: false,
			message: "No order items",
		});
	}
	try {
		let total = 0;
		orderItems.forEach((product) => {
			total += product.price * product.qty;
		});

		const order = await Order.create({
			orderItems,
			user: req.user._id,
			isPaid,
			total,
		});
		res.status(201).json({
			success: true,
			order,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		});
	}
};
