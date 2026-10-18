import { Request, Response } from "express";

const VALID_USERNAME = "admin";
const VALID_PASSWORD = "password123";

export const postLogin = (req: Request, res: Response): void => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: "Username and password are required" });
    return;
  }

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    res.status(200).json({ message: "Login successful. Welcome, admin!" });
    return;
  }

  res.status(401).json({ message: "Invalid username or password" });
};
