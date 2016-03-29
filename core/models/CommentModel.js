// mongoose is a singleton!
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var commentInfo = {
  postId:String,
  username:String,
  description:String,
  likes:Number
};

var CommentSchema = new Schema(commentInfo);

// Models are defined by passing a Schema instance to mongoose.module
module.exports = mongoose.model('Comment', CommentSchema)
