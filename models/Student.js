const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/GrievenceRedressal').then(()=> console.log("Connected to database"))

const schema=new mongoose.Schema({
    username:String,
    name: String,
    password:String,
    email:String,
    college:String,
    image: [String],
    department:String

});
const student = mongoose.model('student' , schema);
module.exports =student;
