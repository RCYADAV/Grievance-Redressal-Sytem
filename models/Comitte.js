const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/GrievenceRedressal').then(()=> console.log("Connected to database"))

const schema=new mongoose.Schema({
    username:String,
    name:String,
    detail:String,
    category:String,
    sub_category:String,
    password:String,
    email:String,
    college:String,
    image: [String],
    





});
const comitte = mongoose.model('comitte' , schema);
module.exports =comitte;