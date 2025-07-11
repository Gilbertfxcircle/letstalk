const path = require('path');

const createPost = (req, res) => {
  const { text } = req.body;
  const media = req.file ? req.file.filename : null;

  res.status(201).json({
    message: 'Post created successfully',
    data: { text, media }
  });
};

const getPosts = (req, res) => {
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: [] // Placeholder: Replace with actual post-fetching logic later
  });
};

module.exports = { createPost, getPosts };