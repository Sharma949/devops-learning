import { Request, Response } from "express";

const VALID_USERNAME = process.env.AUTH_USER;
const VALID_PASSWORD = process.env.AUTH_PASS;

export const postLogin = (req: Request, res: Response): void => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: "Username and password are required" });
    return;
  }

  if (!VALID_USERNAME || !VALID_PASSWORD) {
    res.status(500).json({ message: "Server auth is not configured" });
    return;
  }

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    res.status(200).json({ message: "Login successful. Welcome, admin!" });
    return;
  }

  res.status(401).json({ message: "Invalid username or password" });
};
