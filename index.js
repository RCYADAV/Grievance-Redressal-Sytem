const express = require('express');
const app = express();
const bp=require('body-parser');
app.use(bp.urlencoded({extended:true}));

const es=require('express-session');
app.use(es({secret:'session'}));
app.post('/aaaa',(req,res)=>{
    console.log(req.body);
    
    res.send(req.body);
})


app.use(express.static('./Template/uploads'));

 const getDetail=require('./routes/Detail');
 const add=require('./routes/add');
 const login=require('./routes/login');
app.use('/api/getDetail',getDetail);
app.use('/api/add',add);
app.use('/api/login',login);


app.listen("5000");