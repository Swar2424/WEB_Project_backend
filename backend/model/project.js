//model/project.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const ProjectsSchema = new Schema({
  name : String,
  owner: String,
  itemList : [{
    name : String,
    xPos : Number,
    yPos : Number
  }]
});

// export our module to use in server.js
module.exports = mongoose.model('Project', ProjectsSchema);