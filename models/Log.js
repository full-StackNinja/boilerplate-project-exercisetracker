const mongoose = require("mongoose");

const { Schema } = mongoose;

const logSchema = new Schema({
   username: {
      type: Schema.Types.ObjectId,
      ref: "User",
   },
   count: Number,
   log: [
      {
         description: String,
         duration: Number,
         date: {
            type: Date,
            default: () => new Date().toDateString(),
         },
      },
   ],
});

module.exports = mongoose.model("Log", logSchema);
