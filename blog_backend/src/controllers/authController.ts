import { Request, Response } from "express";
import { AuthService } from "../services/authService";

class AuthController {
  constructor(private userService: AuthService) {}

  async register(req: Request, res: Response) {
    try {
      const { username, email, password, role } = req.body;
      const user = await this.userService.registerUser(
        username,
        email,
        password,
        role
      );
      res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred" });
      }
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const { token, role } = await this.userService.loginUser(email, password);
      res.status(200).json({ message: "Login successful", token, role });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred" });
      }
    }
  }
}

export default AuthController;
