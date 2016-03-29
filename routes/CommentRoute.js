var express = require('express');
var CommentModel = require('../models/CommentModel');
var router = express.Router();

//Gets a list of comments based on the post id and offset
router.get('/:postId/:offset', function(req, res, next) {
  var post = req.params.postId;
  var offset = req.params.offset;

  var options = {
    skip: offset,
    limit: 5
  };

  // Finds comments based on post id
  CommentModel.find({postId: post}, {}, options, function(err, commentList) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(commentList);
    }
  });

});

// posts the comment, ASSUMING postId is already added
router.post('/', function(req, res, next) {

  // Create a new comment document
  var newComment = new CommentModel(req.body);

  // Save the document
  newComment.save(function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(newComment);
    }
  });

});

module.exports = router;
