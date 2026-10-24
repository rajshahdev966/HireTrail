import express from "express"
import authRoutes from "../routes/auth.routes.js"
import jobRoutes from "../routes/job.routes.js"
import cookieParser from "cookie-parser";

const app = express( )

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/job", jobRoutes);


export default app;