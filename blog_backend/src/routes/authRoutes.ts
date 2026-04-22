import { Router } from "express";
import { AuthService } from "../services/authService";
import AuthController from "../controllers/authController";

const router = Router();
const authService = new AuthService();
const authController = new AuthController(authService);

router.post("/register", authController.register.bind(authController));
router.post("/login", authController.login.bind(authController));

export default router;
