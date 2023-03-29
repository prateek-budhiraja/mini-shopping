import { Router } from "express";
import { home } from "../controller/product.controller.js";

const router = Router();

router.get("/", home);

export { router };
