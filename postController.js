
const Post = require("../models/postModel");
const asyncHandler = require("express-async-handler");

// Create a new post
const createPost = asyncHandler(async (req, res) => {
  const { text, visibility } = req.body;
  const photo = req.file && req.file.fieldname === "photo" ? req.file.path : null;
  const video = req.file && req.file.fieldname === "video" ? req.file.path : null;

  const post = await Post.create({
    user: req.user._id,
    text,
    photo,
    video,
    visibility,
  });

  res.status(201).json(post);
});

// Get all visible posts (admin, followers, friends)
const getVisiblePosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().populate("user", "given_name surname").sort({ createdAt: -1 });
  res.json(posts);
});

module.exports = { createPost, getVisiblePosts };
