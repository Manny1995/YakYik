var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postInfo = {
  username:String,
  handle:String,
  description:String,
  likes:Number
};

var PostSchema = new Schema(postInfo);

// Expost the model for
module.exports = mongoose.model('Post', PostSchema);
