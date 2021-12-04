const express = require("express");
const bcrypt= require('bcrypt');


function loginRouter(pgClient) {
    const router = express.Router();

    router.post("/", async (req, res) => {
        const body=req.body;
        const result = await pgClient.query({
            text: 'SELECT user_id,nom,prenom,password FROM users WHERE mail=$1',
            values: [body.email]
        });
        const data=result.rows[0];
        console.log();
        if(data){
            const result2=await bcrypt.compare(body.password,data.password)
            if(result2){
                req.session.user={
                    id:data.user_id,
                    nom:data.nom,
                    prenom:data.prenom
                };
                res.status(200).json({nom:data.nom,prenom:data.prenom});
            }
            else
                res.status(401).send("Authentification echouee");
            
        }
        else{
            res.status(401).send("Authentification echouee");
        }
        return;
    });
    router.get("/who",(req,res)=>{
        if(req.session.user!= null)
            res.status(200).json(req.session.user);
        else
            res.status(401).send("Authentification requise");
        return ;
    })

    router.post("/admin", (req, res) => {
        /* Secu */
        res.status(200).send("Admin login")
        return;
    });


    return router;

}



module.exports = loginRouter;