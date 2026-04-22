import { Router } from "express";
import UserController from "../controllers/userController";
import { UserService } from "../services/userService";
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();
const userService = new UserService();
const userController = new UserController(userService);

router.use(authenticateToken);

router.get("/:id", userController.getUser.bind(userController));
router.put("/:id", userController.updateUser.bind(userController));
router.delete("/:id", userController.deleteUser.bind(userController));

export default router;
