const User = require("../models/User");

exports.user_post = async (req, res) => {
   const { username } = req.body;

   if (username) {
      const newUser = new User({
         username,
      });
      console.log("newUser", newUser);
      await newUser.save();
      res.json(newUser);
      return;
   } else {
      res.send("Please enter username");
   }
};
exports.user_get = async (req, res) => {
   const users = await User.find({});
   res.json(users);
};
