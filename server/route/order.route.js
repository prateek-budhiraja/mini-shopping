import { Router } from "express";
import { addOrder } from "../controller/order.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", isLoggedIn, addOrder);

export { router };
