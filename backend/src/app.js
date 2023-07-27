const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const router = require("./router");

const app = express();

app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

module.exports = app;
