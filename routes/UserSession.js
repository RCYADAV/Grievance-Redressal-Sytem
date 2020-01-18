const express = require('express');
const router = express.Router();

router.get('/loggedin' , (req,res) =>{
    res.send(req.user);
});

router.get('/logout', (req,res)=>{
    req.logOut();
    res.redirect('/')
})
module.exports = router;

