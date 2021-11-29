const express = require("express");

function loginRouter(pgClient) {
    const router = express.Router();


    router.post("/", (req, res) => {
        /* Secu */
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