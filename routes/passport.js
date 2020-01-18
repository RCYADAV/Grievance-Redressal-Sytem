const passport = require("passport");
const localStrategy = require('passport-local');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Student = require('../models/Student');
const bp=require('body-parser')
router.use(bp.json());
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    Student.findById(id).then(user => {
        done(null, user);
    })
});

//-----------------------------LOCAL STRATEGY-----------------------------------
passport.use(new localStrategy((username, password, done) => {
    Student.findOne({ username: username }).then(
        (user) => {
            if (!user) {
                return done(null, false);
            }
            bcrypt.compare(password, user.password).then(isMatch => {
                if(!isMatch)
                    return done(null, false);
                else
                    return done(null, user);
            })
            
        }
    );
}
));

router.post('/local', passport.authenticate('local'),async (req,res)=> {
    res.status(200).send(req.user);
});



module.exports = router;

