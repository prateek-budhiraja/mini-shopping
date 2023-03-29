import User from "./model/user.model.js";
import AuthRole from "./util/authRole.js";

export async function createFirstAdmin() {
	const email = "admin@admin.com";
	const existingAdmin = await User.findOne({ email });
	if (existingAdmin) {
		return;
	}

	await User.create({
		name: "Admin",
		email,
		phone: "1234567890",
		password: "admin",
		role: AuthRole.ADMIN,
	});
}
