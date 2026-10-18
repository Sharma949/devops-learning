import { Router, Request, Response } from "express";
import { postLogin } from "../controllers/auth.controller";

const router = Router();

router.get("/login", (_req: Request, res: Response) => {
  res.sendFile("login.html", { root: "public" });
});

router.post("/login", postLogin);

export default router;
