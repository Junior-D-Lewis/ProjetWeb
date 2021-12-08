const express = require("express");
const bcrypt = require('bcrypt');


function loginRouter(pgClient) {
    const router = express.Router();

    router.post("/", async (req, res) => {
        const body = req.body;
        const result = await pgClient.query({
            text: 'SELECT user_id,nom,prenom,password,statut FROM users WHERE mail=$1',
            values: [body.email]
        });
        const data = result.rows[0];
        if (data) {
            const result2 = await bcrypt.compare(body.password, data.password)
            if (result2) {
                req.session.user = {
                    id: data.user_id,
                    nom: data.nom,
                    prenom: data.prenom,
                    isAdmin: data.statut
                };
                if(data.statut)
                    res.status(200).json({ nom: data.nom, prenom: data.prenom ,isAdmin:true});
                else
                    res.status(200).json({ nom: data.nom, prenom: data.prenom });
            }
            else
                res.status(401).send("Authentification echouee");

        }
        else {
            res.status(401).send("Authentification echouee");
        }
        return;
    });
    router.get("/who", (req, res) => {
        if (req.session.user != null)
            res.status(200).json(req.session.user);
        else
            res.status(401).send("Authentification requise");
        return;
    })

    router.get("/isAdmin", (req, res) => {
        if (req.session.user != null) {
            if (req.session.user.isAdmin)
                res.status(200).json(req.session.user);
            else
                res.status(401).send("Access not granted");

        } else {
            res.status(401).send("Authentification requise");
        }

        return;
    });


    return router;

}



module.exports = loginRouter;