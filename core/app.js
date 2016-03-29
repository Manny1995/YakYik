// Immanuel Amirtharaj
// app.js

var express = require('express');
var postRoute = require('./routes/PostRoute');
var commentRoute = require('./routes/CommentRoute');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var port = process.env.PORT || 3000;
var mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/YakYik'


var app = express();

//bodyParser has to be loaded before calling the routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Bind postRoute to posts url
app.use('/posts', postRoute);

// Bind commentRoute to comments url
app.use('/comments', commentRoute);

// Connect to mongodb
mongoose.connect(mongoURI, function(error) {
    if (error) {
      console.log(error);
    }
    else {
      console.log("Connection Successful!");
    }
  }
);

module.exports = app;

// Listen on port 3000
app.listen(port);
console.log(port);
