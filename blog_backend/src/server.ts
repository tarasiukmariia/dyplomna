import express from "express";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import postRoutes from "./routes/postRoutes";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
