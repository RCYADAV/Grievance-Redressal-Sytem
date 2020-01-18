const express = require('express');
const app = express();
const bp = require('body-parser');
const passport = require("passport");
const cookieSession = require('cookie-session');
const auth = require('./routes/passport');
app.use(bp.urlencoded());
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ['jfdkhsfhkdhfdhkshfjhsdfhsdhkfjshfjhkks']
}));

app.use(passport.initialize());
app.use(passport.session());

const loggedInUser = require('./routes/UserSession');
const get = require('./routes/Detail');
const add = require('./routes/Add');
const upvote=require('./routes/upvote');
app.use('/api/get', get);
app.use('/api/add', add);
app.use('/user', loggedInUser);
app.use('/auth', auth);
app.use('/upvote',upvote);


app.listen("5000");