import { Router } from "express";
import PostController from "../controllers/postController";
import { PostService } from "../services/postService";
import { authenticateToken, requireRole } from "../middleware/authMiddleware";
import { UserService } from "../services/userService";

const router = Router();
const postService = new PostService();
const userService = new UserService();
const postController = new PostController(postService, userService);

router.use(authenticateToken);

router.post(
  "/",
  requireRole(["admin", "writer"]),
  postController.createPost.bind(postController)
);
router.get("/", postController.getPosts.bind(postController));
router.get("/:slug", postController.getPost.bind(postController));
router.put(
  "/:slug",
  requireRole(["admin", "writer"]),
  postController.updatePost.bind(postController)
);
router.delete(
  "/:slug",
  requireRole(["admin"]),
  postController.deletePost.bind(postController)
);

export default router;
