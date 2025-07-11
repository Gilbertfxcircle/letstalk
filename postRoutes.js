
const express = require("express");
const router = express.Router();
const { createPost, getVisiblePosts } = require("../controllers/postController");
const { protect } = require("../middleware/authMiddleware");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", protect, upload.single("media"), createPost);
router.get("/", protect, getVisiblePosts);

module.exports = router;
