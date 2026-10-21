import express, { Request, Response } from "express";
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use("/login", authRoutes);

app.get("/", (_req: Request, res: Response) => {
  res.json({ status: "ok", message: "hey iam mahi sharma and iam a software engineer working with Git something new" });
});

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "healthy", uptime: process.uptime() });
});

export default app;
