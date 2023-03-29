import Product from "../model/product.model.js";
import User from "../model/user.model.js";
import AuthRole from "../util/authRole.js";

export const home = (_req, res) => {
	res.sendStatus(204); //no content
};
