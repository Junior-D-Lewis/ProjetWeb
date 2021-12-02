const express = require("express");


function userRouter(pgClient) {
    const router = express.Router();
    router.get("/", async (req, res) => {
        const result = await pgClient.query({
            text: 'SELECT * FROM users ',
        });
        if (result.rows == null)
            res.status(404).send("Not found");
        else
            res.status(200).json(result.rows);

        return ;

    })

    return router;

}


module.exports = userRouter;