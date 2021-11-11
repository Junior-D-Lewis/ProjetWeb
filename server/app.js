const express = require('express');
const bodyParser=require('body-parser');
const path=require("path");
const clientPath="/home/aurel-m02/Bureau/ProjetWeb/client";


const app=express();

app.use(express.static(clientPath))

app.get('/', (req, res) =>{
    res.sendFile(clientPath+'/index.html')
})

/* app.use('/',(req,res,next)=>{
    res.status(200).sendFile("index.html",{root: path.join(clientPath)});
}); */

module.exports=app;