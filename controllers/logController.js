// const Log = require("../models/Log");
const User = require("../models/User");
const Exercise = require("../models/Exercise");

exports.logs_get = async (req, res) => {
   const { _id } = req.params;
   const { to, from, limit } = req.query;
   const fromDate = new Date(from || new Date(0));
   const toDate = new Date(to || Date.now());
   console.log("fromDate", fromDate);
   console.log("toDate", toDate);

   const user = await User.findById(_id);
   const user_exercises = await Exercise.find({
      username: _id,
      date: {
         $lte: toDate,
         $gte: fromDate,
      },
   }).limit(limit || Number.MAX_SAFE_INTEGER);
   const data = {
      _id: user._id,
      username: user.username,
      count: user_exercises.length,
      log: user_exercises.map((exercise) => {
         return { ...exercise._doc, date: exercise.date.toDateString() };
      }),
   };

   res.json(data);
};
