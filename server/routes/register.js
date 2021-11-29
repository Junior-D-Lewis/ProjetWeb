const express = require("express");

function registerRouter(pgClient) {
    const router = express.Router();


    router.post("/", (req, res) => {
        /* Secu */
        pgClient.query('SELECT * from events', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(data);
            }
        });
        return;
    });

    return router;
}

module.exports = registerRouter;