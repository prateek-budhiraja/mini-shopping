import { Router } from "express";
import { home } from "../controller/auth.controller.js";

const router = Router();

router.get("/", home);

export { router };
