const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const app = express();

app.use(expressLayouts);
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("layout", "./layouts/master");

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/joblist", function (req, res) {
  res.render("pages/joblist");
});

app.get("/jobcategories", function (req, res) {
  res.render("pages/jobcategories");
});

app.get("/candidate", function (req, res) {
  res.render("pages/candidate");
});

app.get("/jobdetails", function (req, res) {
  res.render("pages/jobdetails");
});

app.get("/login", function (req, res) {
  res.render("pages/login");
});

app.get("/register", function (req, res) {
  res.render("pages/register");
});

app.get("/dashboard", function (req, res) {
  res.render("pages/dashboard");
});


app.listen(3000);
console.log("Server is running");
