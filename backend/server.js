import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/UserRoutes.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());

app.use(cookieParser());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDb connected");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: " + err);
  });

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
