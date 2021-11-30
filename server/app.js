const express = require('express');
const bodyParser=require('body-parser');
const path = require("path");
const registerRouter=require("./routes/register.js");
const loginRouter=require("./routes/login.js");

const pgClient=require('./db_config/db');

const app=express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/* Path.resolve to convert Relative path to Absolute file */
app.use(express.static(path.resolve('../ProjetWeb/client')))

app.get('/', (req, res) => {
    res.sendFile('/index.html')
})


app.use('/register',registerRouter(pgClient));
//app.use('/login',loginRouter(pgClient));

module.exports=app;