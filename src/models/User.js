import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  ipAddress: { type: String, required: true },
  createdAt: { type: Date, default: Date.now(), required: true },
});

const User = mongoose.model("User", UserSchema);

export default User;
