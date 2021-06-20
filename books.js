const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const chalk = require("chalk");

//import routers
const booksRouter = require("./routers/books");

//import middlewares
const errorLogger = require("./middlewares/logger");
const logRequestMethod = require("./middlewares/requestMethodLogger");

//connect app to database
mongoose.connect(
  "mongodb+srv://admin102:obt55BpjpXpvLDQR@cluster0.pelnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log(chalk.green("connection to database successful!"));
  }
);

//initialize server
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// app.use(function (req, res) {
//   res.setHeader("Content-Type", "application/json");
//   res.write("you posted:\n");
//   res.end(JSON.stringify(req.body, null, 2));
// });

//use logger middleware for all routes
// app.use('/', errorLogger());
app.use(logRequestMethod);

//call routes
//1. books route
// app.use("/", booksRouter);
app.use(booksRouter);

//open an express server
app.listen(4545, () => {
  console.log(chalk.green("Books service server started."));
});

// obt55BpjpXpvLDQR
