const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use("/", require("./routes/authRoutes"));
const port = 8000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connceted");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(port, () => console.log("Server running"));
