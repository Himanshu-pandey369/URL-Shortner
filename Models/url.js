import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    ShortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamps: { type: Number } }],
  },
  {
    timestamps: true,
  },
);

const URL = mongoose.model("url", urlSchema);

export default URL;
