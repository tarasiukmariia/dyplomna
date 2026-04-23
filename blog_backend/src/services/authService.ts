import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/userModel";

const SECRET_KEY = process.env.SECRET_KEY || "default_secret_key";

export class AuthService {
  async registerUser(
    username: string,
    email: string,
    password: string,
    role: "admin" | "writer" | "reader" = "reader"
  ): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword, role });
    return await user.save();
  }

  async loginUser(
    email: string,
    password: string
  ): Promise<{ token: string; role: string }> {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      SECRET_KEY,
      { expiresIn: "1d" }
    );
    return { token, role: user.role };
  }
}
