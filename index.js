const express = require("express");
const app = express();
const cors = require("cors");

const userController = require("./controllers/userController");
const exerciseController = require("./controllers//exerciseController");
const logController = require("./controllers/logController");

const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.get("/", (req, res) => {
   res.sendFile(__dirname + "/views/index.html");
});

(async function main() {
   try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("database connected!");
   } catch (err) {
      throw Error(err);
   }
})();

app.post("/api/users", userController.user_post);

app.get("/api/users", userController.user_get);

app.post("/api/users/:_id/exercises", exerciseController.exercise_post);

app.use("/api/users/:_id/logs", logController.logs_get);


const listener = app.listen(process.env.PORT || 3000, () => {
   console.log("Your app is listening on port " + listener.address().port);
});
