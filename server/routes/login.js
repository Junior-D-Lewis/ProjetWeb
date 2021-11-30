const express = require("express");
const bcrypt= require('bcrypt');


function loginRouter(pgClient) {
    const router = express.Router();

    router.post("/", async (req, res) => {
        const body=req.body;
        const result = await pgClient.query({
            text: 'SELECT nom,prenom,password FROM users WHERE mail=$1',
            values: [email]
        });
        if(result.rows.length>0){
            if(bcrypt.compare(body.password,result.rows[0].password)==true)
                res.status(200).json(result.rows[0]);
            
        }
        res.status(200).send("Login client")
        return;
    });
    

    router.post("/admin", (req, res) => {
        /* Secu */
        res.status(200).send("Admin login")
        return;
    });

}



module.exports = loginRouter;