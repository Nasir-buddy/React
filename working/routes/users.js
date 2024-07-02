const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/job_data");

const userSchema = mongoose.Schema({
  userName: String,
  name: String,
  age: Number
})
 
module.exports = mongoose.model("user", userSchema)