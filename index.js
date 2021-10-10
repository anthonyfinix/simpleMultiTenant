const app = require('express')();
const user = require('./user');
const item = require('./item');
const mongoose = require('mongoose');
const setDb = require('./setDb')
mongoose.connect('mongodb://localhost:27017/multiTenant?readPreference=primary&ssl=false');
app.use(require('express').json());
app.use('/user', user)
app.use('/item',setDb, item)
app.listen(8000, () => console.log("listening 8000"))