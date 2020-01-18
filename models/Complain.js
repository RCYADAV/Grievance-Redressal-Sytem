const mongoose = require('mongoose');
const Response = require('./Response');
mongoose.connect('mongodb+srv://Yash2412:yash2412@cluster0-6rqau.mongodb.net/GrievanceRedressal').then(()=> console.log("Connected to database"))



const schema = new mongoose.Schema({
    subject: String,
    description: String,
    category: String,
    sub_category:String,
    username: String,
    date: {type: Date , default: Date.now()},
    solving_days:Number,
    no_of_upvote: {type:Number,default:0},
    isSolved:{type:Boolean,default:false},
    status: String,
    college: String,
    response: [Response],
    _user: mongoose.Schema.Types.ObjectId,
    image: [String]
});

const Complain = mongoose.model('complain' , schema);
module.exports =Complain;
