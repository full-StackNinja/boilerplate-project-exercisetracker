const User = require("../models/User");
const Exercise = require("../models/Exercise");

exports.exercise_post = async (req, res) => {
   const { _id } = req.params;
   const { description, duration, date } = req.body;
   const user = await User.findById(_id);
   if (!user) {
      return res.status(500).send(`No user against _id:${_id}`);
   }
   const newExercise = new Exercise({
      username: _id,
      description,
      duration,
      date: date,
   });
   await newExercise.save();

   res.json({
      _id: user._id,
      username: user.username,
      description: newExercise.description,
      duration: newExercise.duration,
      date: newExercise.date.toDateString(),
   });
};
