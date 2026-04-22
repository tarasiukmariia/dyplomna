import User from "../models/userModel";

export class UserService {
  async findUser(userId: string) {
    return await User.findById(userId);
  }

  async updateUser(
    userId: string,
    updateData: Partial<{ name: string; email: string; password: string }>
  ) {
    return await User.findByIdAndUpdate(userId, updateData, { new: true });
  }

  async removeUser(userId: string) {
    return await User.findByIdAndDelete(userId);
  }
}
