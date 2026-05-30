import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    game: {
      type: String,
      required: true,
    },
    slots: {
      type: [String],
      default: [null, null, null, null, null, null],
    },
  },
  {timestamps: true},
);

export default mongoose.model("Team", teamSchema);
