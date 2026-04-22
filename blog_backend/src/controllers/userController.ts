import { Request, Response } from "express";
import { UserService } from "../services/userService";

class UserController {
  constructor(private userService: UserService) {}

  async getUser(req: Request, res: Response) {
    try {
      const user = await this.userService.findUser(req.params.id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred" });
      }
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const updatedUser = await this.userService.updateUser(
        req.params.id,
        req.body
      );
      if (updatedUser) {
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred" });
      }
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const result = await this.userService.removeUser(req.params.id);
      if (result) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred" });
      }
    }
  }
}

export default UserController;
