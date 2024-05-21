import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
} from "../controllers/RoomController.js";
import { authorizedToken } from "../middleware/authMiddleware.js";

const roomRoutes = express.Router();

roomRoutes.get("/", getAllRooms);
roomRoutes.post("/create-room", authorizedToken, createRoom);
roomRoutes.get("/:id", getRoomById);
roomRoutes.put("/:id", authorizedToken, updateRoom);
roomRoutes.delete("/:id", authorizedToken, deleteRoom);

export default roomRoutes;
