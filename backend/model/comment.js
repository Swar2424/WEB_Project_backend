//model/comment.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FreritoSchema = new Schema({
  cascade: String,
  derp: String,
}, {add_id:false});

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const CommentsSchema = new Schema({
  author: String,
  text: FreritoSchema,
}, { timestamps: true });

// export our module to use in server.js
module.exports = mongoose.model('Comment', CommentsSchema);