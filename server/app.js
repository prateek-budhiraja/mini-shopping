import express from "express";
import dbConnect from "./config/dbConnection.js";
import cookieParser from "cookie-parser";
import { router as productRouter } from "./route/product.route.js";
import { router as authRouter } from "./route/auth.route.js";
import cors from "cors";

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
	})
);

app.use("/api", productRouter);
app.use("/api/auth", authRouter);

export default app;
