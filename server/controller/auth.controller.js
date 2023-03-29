import User from "../model/user.model.js";
import { options } from "../config/cookieOptions.js";

// signup
// POST /api/auth/signup
export const signup = async (req, res) => {
	const { email, phone, password, name, role } = req.body;
	try {
		const user = await User.create({ email, password, name, role, phone });
		user.password = undefined;
		res.status(201).json({
			success: true,
			user,
		});
	} catch (err) {
		res.status(400).json({
			success: false,
			error: err,
		});
	}
};

// login
// POST /api/auth/login
export const login = async (req, res) => {
	const { email, phone, password } = req.body;
	if (!email && !phone) {
		return res.status(400).json({
			success: false,
			error: "Please provide email or phone number",
		});
	}
	try {
		const user = await User.findOne({ $or: [{ email }, { phone }] }).select(
			"+password"
		);
		if (!user) {
			return res.status(403).json({
				success: false,
				error: "Invalid credentials",
			});
		}
		const isPasswordMatched = await user.comparePassword(password);
		if (!isPasswordMatched) {
			return res.status(403).json({
				success: false,
				error: "Invalid credentials",
			});
		}
		const token = await user.getJwtToken();

		res.cookie("token", token, options);
		user.password = undefined;

		res.status(200).json({
			success: true,
			user,
		});
	} catch (err) {
		res.status(400).json({
			success: false,
			error: err,
		});
	}
};

// logout
// GET /api/auth/logout
export const logout = async (req, res) => {
	req.user = undefined;
	res.cookie("token", null, {
		httpOnly: true,
		expires: new Date(Date.now()),
	});

	res.status(200).json({
		success: true,
		message: "User logged out successfully",
	});
};
