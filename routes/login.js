const path=require('path');
const express = require('express');
const session=require('express-session');

const router = express.Router();

const body=require('body-parser');
const bcrypt=require('bcryptjs');
//router.use(body.json());
//router.use(session({secret:'session'}));
const Student = require('../models/Student');

const Comitte = require('../models/Comitte');
router.post('/student',async(req,res,next)=>{

    const username  = req.body.username;
    
    const password  = req.body.password;
    console.log(username);
    console.log(password);
    
    var student = await Student.findOne({username:username });
      if(!student)
      return  res.json({ msg: 'not exist'});
      
    bcrypt.compare(password,student.password).then(isMatch => { 
       if (!isMatch)return res.json({ msg:'wrong password'});

    // const salt = await bcrypt.genSalt(10);
    // const pswd = await bcrypt.hash(password, salt);
     //if(pswd!=student.password)
    // return res.json({msg:'wrong password'})

     else
    { sess=req.session;
     sess.username=student.username;
         return res.json({msg:'welcome'});}
});

});
module.exports=router;
