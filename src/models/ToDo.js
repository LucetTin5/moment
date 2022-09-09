import mongoose from "mongoose";

const ToDoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  todo: { type: String, required: true },
  done: { type: Boolean, default: false, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

const ToDo = mongoose.model("ToDo", ToDoSchema);

export default ToDo;
