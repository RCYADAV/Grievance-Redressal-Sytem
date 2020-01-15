const express = require('express');
const router = express.Router();
const bcrypt=require('bcryptjs');
const cp=require('cookie-parser');
router.use(cp());
const es=require('express-session')

const Comitte = require('../models/Comitte');
const student = require('../models/Student');
const Complain = require('../models/Complain');
//router.use(es({secret:'session'}));


// ------------------------------
// To Add A New Comitte Member
// ------------------------------

router.post('/comitte',async (req , res )=>{
    
    const category=req.body.category;
    const sub_category=req.body.sub_category;
    const uname=req.body.username;
    const name=req.body.name;
    const password=req.body.password;
    const salt = await bcrypt.genSalt(10);
    const pswd = await bcrypt.hash(password, salt);
    const email=req.body.email;
    const detail=req.body.detail;
    const college=req.body.college;
    const newMember = new Comitte({
        username: uname,
        comitte: comitte,
        category:category,
        sub_category:sub_category,
        name:name,
        password:pswd,
        email:email, 
        detail: detail,
        college: college,
        image: imgArray
    });
    newMember.save(function(err , doc){
        if(err) throw err;
    });
    res.send('sucesful');
});

// ------------------------------
// To Upload A Student Detail
// ------------------------------

router.post('/student', async(req , res )=>{
    console.log('I Gotch Yeah');
    const uname=req.body.username;
    const name=req.body.name;
    const password=req.body.password;
    const department=req.body.department;
    const salt = await bcrypt.genSalt(10);
    const pswd = await bcrypt.hash(password, salt);
    const email=req.body.email;
    const college=req.body.college;
    const newMember = new student({
        username: uname,
        name:name,
        password:pswd,
        email:email,
        department:department,
        college: college,
        image: imgArray
    });
    newMember.save(function(err , doc){
        if(err) throw err;
    });
    res.send('sucesful');
});
router.post('/complain',async(req , res )=>{
    
    const subject=req.body.subject;
    const category=req.body.category;
    const sub_category=req.body.sub_category;
    sess=req.session;
    username=req.cookies.username;
    var student = await Student.findOne({username:username });
    const description=req.body.description;
    const college=req.body.college;


    const newComplain = new Complain({
       subject:subject,
        category: category,
        sub_category:sub_category,
        username: uname,
        description: description,
        college: student.college,
        image: imgArray
    });


    newComplain.save(function(err , doc){
        if(err) throw err;
    });
    res.send('sucesful');
});

module.exports = router;
