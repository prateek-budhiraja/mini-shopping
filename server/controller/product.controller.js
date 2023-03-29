import Product from "../model/product.model.js";
import User from "../model/user.model.js";
import JWT from "jsonwebtoken";
import config from "../config/index.js";
import AuthRole from "../util/authRole.js";

// add product
// POST /api/products/add
export const addProduct = async (req, res) => {
	const { name, mrp, sellingPrice, color, imageSrc, size } = req.body;
	try {
		const product = await Product.create({
			name,
			mrp,
			sellingPrice,
			color,
			imageSrc,
			size,
		});

		res.status(201).json({
			success: true,
			product,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		});
	}
};

// get all products
// GET /api/products
export const getProducts = async (req, res) => {
	try {
		const products = await Product.find();
		res.status(200).json({
			success: true,
			products,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: error.message,
		});
	}
};
