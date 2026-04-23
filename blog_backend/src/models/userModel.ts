import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'writer' | 'reader';
}

const userSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['admin', 'writer', 'reader'],
    default: 'reader',
    required: true,
  },
});

export default mongoose.model<IUser>("User", userSchema);
