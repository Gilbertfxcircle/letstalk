
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      trim: true,
    },
    photo: {
      type: String, // URL or path to the image
    },
    video: {
      type: String, // URL or path to the video
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    visibility: {
      type: String,
      enum: ["public", "followers", "friends"],
      default: "followers",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
