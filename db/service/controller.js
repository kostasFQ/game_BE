const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.getUsers = async () => await User.find({}).sort('-average');

exports.saveUser = async (user) => {
  const newUser = new User (user);
  await newUser.save();
}

exports.findUser = async (user) => await User.exists(user);