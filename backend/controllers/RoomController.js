import { Room } from "../models/roomModel.js";

const createRoom = async (req, res) => {
  try {
    const room = Room({
      ...req.body,
      owner: req.user._id,
    });
    await room.save();
    res.status(201).json(room);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getRoomById = async (req, res) => {
  const { id } = req.params;
  try {
    const room = await Room.findById(id);
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRoom = async (req, res) => {
  const { id } = req.params;
  try {
    const room = await Room.findByIdAndUpdate(id, req.body, { new: true });
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    return res.status(200).json(room);
  } catch (error) {
    res.json(error);
  }
};

const deleteRoom = async (req, res) => {
  const { id } = req.params;
  try {
    const room = await Room.findByIdAndDelete(id);

    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    return res.status(200).json({ message: "Room deleted" });
  } catch (error) {
    res.json(error);
  }
};

export { createRoom, getAllRooms, getRoomById, updateRoom, deleteRoom };
