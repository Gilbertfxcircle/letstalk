
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  given_name: String,
  surname: String,
  dob: Date,
  phone: { type: String, unique: true },
  email: { type: String, unique: true, sparse: true },
  password: String,
  verified: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
