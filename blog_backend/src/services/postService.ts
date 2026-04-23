import Post, { IPost } from "../models/postModel";

interface GetPostsOptions {
  search: string;
  author: string;
  sort: string;
  page: number;
  limit: number;
}

export class PostService {
  async createPost(data: Partial<IPost>): Promise<IPost> {
    const post = new Post(data);
    return await post.save();
  }

  async getPosts({
    search,
    author,
    sort,
    page,
    limit,
  }: GetPostsOptions): Promise<{ posts: IPost[]; total: number }> {
    const query: any = {};
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }
    if (author) {
      query.author = { $regex: author, $options: "i" };
    }

    const sortOptions: any = {
      "date-desc": { date: -1 },
      "date-asc": { date: 1 },
      "title-asc": { title: 1 },
      "title-desc": { title: -1 },
    };

    const posts = await Post.find(query)
      .sort(sortOptions[sort] || sortOptions["date-desc"])
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Post.countDocuments(query);

    return { posts, total };
  }

  async getPost(slug: string): Promise<IPost | null> {
    return await Post.findOne({ slug });
  }

  async updatePost(slug: string, data: Partial<IPost>): Promise<IPost | null> {
    return await Post.findOneAndUpdate({ slug }, data, { new: true });
  }

  async deletePost(slug: string): Promise<boolean> {
    const result = await Post.deleteOne({ slug });
    return result.deletedCount > 0;
  }
}
