import { Request, Response } from "express";
import { UserService } from "../services/userService";

class UserController {
  constructor(private userService: UserService) {}

  async getUser(req: Request, res: Response) {
    try {
      const userJwt = req.user as { id?: string; role?: string };
      if (userJwt.role !== "admin" && userJwt.id !== req.params.id) {
        return res
          .status(403)
          .json({ message: "Access denied: insufficient permissions" });
      }
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
      const userJwt = req.user as { id?: string; role?: string };
      if (userJwt.role !== "admin" && userJwt.id !== req.params.id) {
        return res
          .status(403)
          .json({ message: "Access denied: insufficient permissions" });
      }
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
    const userJwt = req.user as { id?: string; role?: string };
    if (userJwt.role !== "admin" && userJwt.id !== req.params.id) {
      return res
        .status(403)
        .json({ message: "Access denied: insufficient permissions" });
    }
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

  async getMe(req: Request, res: Response) {
    try {
      const userJwt = req.user as { id?: string };
      if (!userJwt?.id) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      const user = await this.userService.findUser(userJwt.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ id: user._id, username: user.username, email: user.email, role: user.role });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
}

export default UserController;
