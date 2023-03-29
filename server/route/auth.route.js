import { Router } from "express";
import { home, login, logout, signup } from "../controller/auth.controller.js";

const router = Router();

router.get("/", home);
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

export { router };
