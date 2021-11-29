const express = require('express');
const bodyParser=require('body-parser');
const path = require("path");

const app=express();

/* Path.resolve to convert Relative path to Absolute file */
app.use(express.static(path.resolve('../ProjetWeb/client')))

app.get('/', (req, res) => {
    res.sendFile('/index.html')
})

/* app.use('/',(req,res,next)=>{
    res.status(200).sendFile("index.html",{root: path.join(clientPath)});
}); */

module.exports=app;