const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.getUsers = async (count) => {
  try {
    const users = await User.find({}).sort('-average').limit(count);
    return { status: 200, response: users };
  }
  catch (err) {
    console.log(err);
    return { status: 200, erroe: err.message };
  }
}

exports.saveUser = async (user) => {
  try {
    const { name } = user;
    if (name.length === 0) { return { status: 409, error: 'Name is required.' } }
    const isExist = await User.findOne({ name });

    if (isExist) { return { status: 406, error: 'Sorry, this name already exist.' } }

    const newUser = new User(user);
    await newUser.save();
    return { status: 201, response: 'OK' };
  } catch (err) {
    console.log(err);
    return { status: 400, error: err.message };
  }
}

exports.findUser = async (user) => await User.exists(user);