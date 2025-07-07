const mongoose = require('mongoose');

// Each link has a label and a URL 
const linkSchema = new mongoose.Schema({
  label: { type: String, required: true },
  url: { type: String, required: true }
});

// User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String },
  bio: { type: String },
  links: [linkSchema]  // array of links
});

// Export the User model so other files can use it
module.exports = mongoose.model('User', userSchema);
