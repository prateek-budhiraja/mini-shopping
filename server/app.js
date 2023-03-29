import express from "express";
import dbConnect from "./config/dbConnection.js";
import cookieParser from "cookie-parser";
import { router as productRouter } from "./route/product.route.js";
import { router as authRouter } from "./route/auth.route.js";
import { router as orderRouter } from "./route/order.route.js";
import cors from "cors";

import { createFirstAdmin } from "./backdoor.js";

const app = express();

dbConnect();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,PATCH,POST,DELETE",
		credentials: true,
		allowedHeaders: ["Content-Type", "Authorization"],
	})
);

app.options(
	"*",
	cors({
		origin: "http://localhost:3000",
		methods: "GET,PATCH,POST,DELETE",
		credentials: true,
		allowedHeaders: ["Content-Type", "Authorization"],
	})
);

app.use("/api/auth/", authRouter);
app.use("/api/products/", productRouter);
app.use("/api/order/", orderRouter);

createFirstAdmin();

export default app;
