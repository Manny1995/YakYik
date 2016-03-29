// Immanuel Amirtharaj
// PostRoute.js

var express = require('express');
var PostModel = require('../models/PostModel');
var router = express.Router();


// Returns all posts
router.get('/', function(req, res, next) {

  // returns all posts, returns a list of posts in callback function
  PostModel.find(function (err, postList) {
    if (err) {
      console.log("Error with the GET request");
    }
    else {
      res.json(postList);
    }
  });

});

// gets a single post based on the ID
router.get('/id/:id', function(req, res, next) {
  console.log(req.params.id);
  PostModel.findOne({_id: req.params.id}, {}, {}, function (err, post) {
    if (err) {
      console.log("Error with the GET request");
    }
    else {
      res.json(post);
    }
  });
})

// Returns a list of 5 posts with an offset
router.get('/:offset', function(req, res, next) {
  var offset = req.params.offset;
  console.log(offset);
  var options =
  {
    skip: offset,
    limit: 5
  }

  // returns all posts, returns a list of posts in callback function
  PostModel.find({}, {}, options, function (err, postList) {
    if (err) {
      console.log("Error with the GET request");
    }
    else {
      console.log("successfully got data");
      res.json(postList);
    }
  });

});


router.post('/', function(req, res, next) {

  var newPost = new PostModel(req.body);
  console.log(req.body);
  newPost.save(function(error)
  {
      if (error) {
        console.log("Error with the POST request");
      }
      else {
        console.log("POST successful");
        console.log(req.body);
        res.json(req.body);
      }
  });

});

// Update a post based on Id
router.put('/:id', function(req, res, next) {
  var updateId = req.params.id;
  var updatedPost = req.body;

  // update the post
  PostModel.findByIdAndUpdate(updateId, updatedPost, function(error, post) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(post);
    }
  });

});

// Delete a post based on Id
router.delete('/:id', function( req, res, next) {
  var deleteId = req.params.id;
  PostModel.findByIdAndRemove(deleteId, function(error, deletedObject)
  {
    if (error) {
      console.log(error);
    }
    else {
      res.json(deletedObject);
    }
  });
});

module.exports = router;
