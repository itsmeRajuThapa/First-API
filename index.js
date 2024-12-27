const express = require("express");
const app = express();
const mongodb = require('mongoose');
const {MONGO_DB_CONFIG} = require("./config/app.config");
const errors = require("./middleware/error");
const { default: mongoose } = require("mongoose");

mongoose.Promise = global.Promise;//public
mongoose.connect(MONGO_DB_CONFIG.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("Database Connected");(error)=>{console.log("Database can't be Connected: " + error);}});


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/uploads', express.static('uploads'));
app.use('/api',require('./routes/app.routes'));
app.use(errors.errorHandler);

app.listen(process.env.port ||4000 , function(){
    console.log('Ready toGo!');
})