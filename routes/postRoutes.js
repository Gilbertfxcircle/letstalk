const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { createPost, getPosts } = require('../controllers/postController');

// File upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Routes
router.post('/', upload.single('media'), createPost);
router.get('/', getPosts);

module.exports = router;