// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  apiKey: { type: String, required: true, unique: true },
  isPremium: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
