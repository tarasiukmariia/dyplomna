import User from "../models/userModel";

export class UserService {
  async findUser(userId: string) {
    return await User.findById(userId);
  }

  async updateUser(
    userId: string,
    updateData: Partial<{
      username: string;
      email: string;
      password: string;
      role: "admin" | "writer" | "reader";
    }>
  ) {
    if (updateData.role) {
      delete updateData.role;
    }
    return await User.findByIdAndUpdate(userId, updateData, { new: true });
  }

  async removeUser(userId: string) {
    return await User.findByIdAndDelete(userId);
  }
}
