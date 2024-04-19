const mongoose = require("mongoose");

const { Schema } = mongoose;

const exerciseSchema = new Schema({
   username: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
   },
   description: {
      type: String,
   },
   duration: Number,
   date: {
      type: Date,
      default: Date.now,
   },
});

module.exports = mongoose.model("Exercise", exerciseSchema);
