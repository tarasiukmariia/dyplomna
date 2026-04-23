import { Router } from "express";
import UserController from "../controllers/userController";
import { UserService } from "../services/userService";
import { authenticateToken, requireRole } from "../middleware/authMiddleware";

const router = Router();
const userService = new UserService();
const userController = new UserController(userService);

router.get("/me", authenticateToken, userController.getMe.bind(userController));

router.get(
  "/:id",
  authenticateToken,
  userController.getUser.bind(userController)
);
router.put(
  "/:id",
  authenticateToken,
  userController.updateUser.bind(userController)
);
router.delete(
  "/:id",
  authenticateToken,
  requireRole(["admin"]),
  userController.deleteUser.bind(userController)
);

export default router;
