import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  imageURL: { type: String, required: true },
  price: { type: Number, required: true },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Room = mongoose.model("Room", roomSchema);
