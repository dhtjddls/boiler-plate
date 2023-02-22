const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://sparta:test@cluster0.xzw0iic.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Mongo well connected"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => res.send("hello world"));

app.listen(port, () => console.log(`app listening on port ${port}!`));
