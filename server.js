// Dependencies
const path = require("path");
const express = require("express");

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const friends = [];


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});