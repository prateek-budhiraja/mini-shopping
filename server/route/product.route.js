import { Router } from "express";
import { addProduct, getProducts } from "../controller/product.controller.js";
import { isAdmin, isLoggedIn } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/add", isLoggedIn, isAdmin, addProduct);
router.get("/", getProducts);

export { router };
