const express = require('express');
const router = express.Router();
const { createAd, getAllAds } = require('../controllers/adController');
const { protect } = require('../middleware/authMiddleware');
const { adminProtect } = require('../middleware/adminProtect');

router.post('/', protect, adminProtect, createAd); // Only admins
router.get('/', protect, getAllAds); // Everyone can view

module.exports = router;