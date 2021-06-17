const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// REQUIRE MONGOOSE
const mongoose = require("mongoose");
// DATABASE FOR MONGOOSE
mongoose
  .connect("mongodb://localhost:27017/grocery-backend", {
    useNewUrlParser: true, // ADD ERRORS MESSAGES
    useUnifiedTopology: true, // REMOVES ERROR MESSAGES
    useUnifiedTopology: true,
  })
  .then(() => {
    // PROMISES
    console.log(`MONGODB CONNECTED`);
  })
  // ERROR CATCH BLOCK
  .catch(function (e) {
    console.log(e);
  });

const indexRouter = require("./routes/index");
const groceryRouter = require("./routes/users/groceryRouter");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/api/grocery", groceryRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ message: "error", error: err });
});

module.exports = app;
