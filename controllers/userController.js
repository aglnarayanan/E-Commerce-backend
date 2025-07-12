// backend/controllers/userController.js
const User = require('../models/User');

exports.createOrUpdateUser = async (req, res) => {
  const { uid, name, email } = req.body;

  let user = await User.findOne({ uid });
  if (user) {
    user.name = name;
    user.email = email;
    await user.save();
  } else {
    user = new User({ uid, name, email });
    await user.save();
  }

  res.json(user);
};
