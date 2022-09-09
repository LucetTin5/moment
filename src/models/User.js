import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now(), required: true },
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "ToDo" }],
});

const User = mongoose.model("User", UserSchema);

export default User;
