const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  score: Number,
  average: String,
  seconds: String
}, { collection: 'results' });

const User = mongoose.model('User', UserSchema);
exports.module = { user: User };