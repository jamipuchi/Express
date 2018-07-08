const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');

var app = express();

app.use(morgan("short"));

var staticPath = path.join(__dirname,"static");
app.use(express.static(staticPath));

app.use(function(req, res) {
 res.status(404);
 res.sendFile("File not found!");
});

app.listen(3000, function () {
  console.log("App started on port 3000");
});
