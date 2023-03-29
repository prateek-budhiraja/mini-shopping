import Order from "../model/order.model.js";
import nodemailer from "nodemailer";

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

		// send email
		const transporter = nodemailer.createTransport({
			host: "smtp.ethereal.email",
			port: 587,
			auth: {
				user: "santa.metz72@ethereal.email",
				pass: "9Mw5JT5ZPb7dDgSSbu",
			},
		});

		const mailOptions = {
			from: "santa.metz72@ethereal.email",
			to: req.user.email,
			subject: "Order Confirmation",
			html: `<h1>Thank you for your order</h1>
      <p>Order ID: ${order._id}</p>
      <p>Order Items: ${orderItems.map((item) => item.name)}</p>
      <p>Total: ${total}</p>
      <p>Order Date: ${order.createdAt}</p>
      <p>Order Status: ${order.isPaid ? "Paid" : "Not Paid"}</p>
      <p>Thank you for shopping with us</p>
      `,
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error);
			} else {
				console.log("Email sent: " + info.response);
			}
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
