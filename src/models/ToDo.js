import mongoose from "mongoose";

const ToDoSchema = new mongoose.Schema({
  todo: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

const ToDo = mongoose.model("ToDo", ToDoSchema);

export default ToDo;
