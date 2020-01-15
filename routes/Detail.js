const path=require('path');
const express = require('express');
const router = express.Router();
const body=require('body-parser');


const Student = require('../models/Student');

const Comitte = require('../models/Comitte');

router.get('/student/:username' , async(req,res)=>{
    const uname=req.params.username;
    const detail=await Student.find({username:uname});
     return res.send(detail);
}


);

router.get('/comitte/:username' , async(req,res)=>{
    const uname=req.params.username;
    const detail=await Comitte.find({username:uname});
     return res.send(detail);
}


);

module.exports = router;