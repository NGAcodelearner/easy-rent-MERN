import express from "express";
import {
  getUserProfile,
  loginUser,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controllers/UserController.js";
import { authorizedToken } from "../middleware/authMiddleware.js";
const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.post("/logout", logoutUser);
userRoutes.get("/profile", authorizedToken, getUserProfile);
userRoutes.put("/profile", authorizedToken, updateUserProfile);

export default userRoutes;
