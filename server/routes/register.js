const express = require("express");
const bcrypt = require('bcrypt');

function registerRouter(pgClient) {
    const router = express.Router();

    router.post("/", async (req, res) => {
        /* Secu */
        console.log(bcrypt.hash(""))
        console.log(req.body);
        const body = req.body;
        const result = await pgClient.query({
            text: 'SELECT nom FROM users WHERE mail=$1',
            values: [body.mail]
        });
        if (result.rows.length > 0) {
            res.status(401).send("Un compte a deja cette adresse mail");
        } else {
            const hashed_password =await bcrypt.hash(body.password, 10);
            await pgClient.query({
                text: 'INSERT INTO users (nom,prenom,mail,password,statut) VALUES ($1,$2,$3,$4,0)',
                values: [body.nom, body.prenom, body.mail, hashed_password]
            });
            res.status(200).send("Compte cree");
        }
        return;
    });
    
    return router;
}

module.exports = registerRouter;