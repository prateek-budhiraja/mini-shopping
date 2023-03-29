import JWT from "jsonwebtoken";
import config from "../config/index.js";
import User from "../model/user.model.js";

// check if the user is logged in, also sets req.user
export const isLoggedIn = async (req, res, next) => {
	let token;
	if (req.cookies?.token) {
		token = req.cookies?.token;
	}
	if (!token) {
		return res.status(401).json({
			success: false,
			message: "Not authorized to access this route",
		});
	}
	try {
		const decodedJwtPayload = await JWT.verify(token, config.JWT_SECRET);
		if (!decodedJwtPayload) {
			return res.status(401).json({
				success: false,
				message: "Not authorized to access this route",
			});
		}
		req.user = await User.findById(decodedJwtPayload._id, "name email role");
		next();
	} catch (err) {
		return res.status(401).json({
			success: false,
			message: "Not authorized to access this route",
		});
	}
};

// check if the user is ADMIN
export const isAdmin = (req, res, next) => {
	if (req.user?.role === "ADMIN") {
		next();
	} else {
		res.status(403).json({
			success: false,
			message: "Not authorized to access this route",
		});
	}
};
