import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
  slug: string;
  title: string;
  excerpt: string;
  authorUsername: string;
  authorEmail: string;
  date: Date;
  imageUrl?: string;
  content: string;
}

const postSchema: Schema = new Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  authorUsername: { type: String, required: true },
  authorEmail: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
  imageUrl: { type: String, required: true },
  content: { type: String, required: true },
});

export default mongoose.model<IPost>("Post", postSchema);
