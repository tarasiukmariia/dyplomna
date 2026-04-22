import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/userModel";

const SECRET_KEY = process.env.SECRET_KEY || "default_secret_key";

export class AuthService {
  async registerUser(
    username: string,
    email: string,
    password: string
  ): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    return await user.save();
  }

  async loginUser(email: string, password: string): Promise<string> {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });
    return token;
  }
}
