import { Request, Response } from "express";
import { PostService } from "../services/postService";
import { UserService } from "../services/userService";

class PostController {
  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  async createPost(req: Request, res: Response) {
    try {
      const { title, excerpt, imageUrl, content, slug } = req.body;
      const user = req.user as { id: string; email: string };

      const userRecord = await this.userService.findUser(user.id);
      if (!userRecord) {
        return res.status(404).json({ message: "User not found" });
      }

      const post = await this.postService.createPost({
        slug,
        title,
        excerpt,
        imageUrl,
        content,
        authorUsername: userRecord.username,
        authorEmail: userRecord.email,
        date: new Date(),
      });
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to create post", error });
    }
  }

  async getPosts(req: Request, res: Response) {
    try {
      const {
        search = "",
        author = "",
        sort = "date-desc",
        page = 1,
        limit = 10,
      } = req.query as {
        search?: string;
        author?: string;
        sort?: string;
        page?: string;
        limit?: string;
      };
      const posts = await this.postService.getPosts({
        search,
        author,
        sort,
        page: Number(page),
        limit: Number(limit),
      });
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch posts", error });
    }
  }

  async getPost(req: Request, res: Response) {
    try {
      const post = await this.postService.getPost(req.params.slug);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch post", error });
    }
  }

  async updatePost(req: Request, res: Response) {
    try {
      const post = await this.postService.updatePost(req.params.slug, req.body);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to update post", error });
    }
  }

  async deletePost(req: Request, res: Response) {
    try {
      const result = await this.postService.deletePost(req.params.slug);
      if (!result) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete post", error });
    }
  }
}

export default PostController;
