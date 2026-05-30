import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
  },
  {timestamps: true},
);

export default mongoose.model("User", userSchema);
