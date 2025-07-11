const Ad = require('../models/adModel');

exports.createAd = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const ad = await Ad.create({
      title,
      description,
      image,
      createdBy: req.user._id,
    });
    res.status(201).json(ad);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllAds = async (req, res) => {
  try {
    const ads = await Ad.find().populate('createdBy', 'given_name surname');
    res.status(200).json(ads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};