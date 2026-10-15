import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (_req: Request, res: Response) => {
  res.json({ status: "ok", message: "hey iam mahi sharma " });
});

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "healthy", uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
