const express = require("express");
const cors = require("cors");
const app = express();
const session = require("express-session");
const passport = require("passport");
const { jwtStrategy, googleStrategy } = require("./db/auth.js");

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const ErrorHandler = require("./middlewares/ErrorHandler.js");


if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}
app.use(
  session({
    secret: "Random String", 
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public"));

passport.use(jwtStrategy);
passport.use(googleStrategy);

const users = require("./routes/auth");
const task = require("./routes/task");


app.use("/api/users", users);
app.use("/api/task", task);
app.use(ErrorHandler)



module.exports = app;
