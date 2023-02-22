const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const config = require("./comfig/key");
const { User } = require("./models/User");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.set("strictQuery", false);
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("Mongo well connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("hello world"));
app.post("/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
