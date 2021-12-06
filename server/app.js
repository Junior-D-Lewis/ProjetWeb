const express = require('express');
const bodyParser=require('body-parser');
const path = require("path");
const session=require('express-session');
const registerRouter=require("./routes/register.js");
const loginRouter=require("./routes/login.js");
const userRouter=require("./routes/users.js");
const eventRouter=require("./routes/events.js");
const participationRouter=require("./routes/participation");

const pgClient=require('./db_config/db');

const app=express();

app.use(express.json())
app.use(session({ secret: 'grehjznejzkhgjrez', saveUninitialized: false, resave: false }))
app.use(express.urlencoded({ extended: false }))

/* Path.resolve to convert Relative path to Absolute file */
app.use(express.static(path.resolve('../ProjetWeb/client')))

app.get('/', (req, res) => {
    res.sendFile('/index.html')
})

app.use('/register',registerRouter(pgClient));
app.use('/login',loginRouter(pgClient));
app.use('/users',userRouter(pgClient));
app.use('/events',eventRouter(pgClient));
app.use('/participation',participationRouter(pgClient));
app.get('/deconnexion',(req,res)=>{
    const name =req.session.user.name;
    req.session.destroy();
    console.log(`${name} vient de se deconnecter`);
    res.status(200).send("Deconnecté");
})

module.exports=app;