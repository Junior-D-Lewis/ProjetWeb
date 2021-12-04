const express = require("express");

function eventRouter(pgClient) {
    const router = express.Router();

    router.get("/", async (req, res) => {
        const result = await pgClient.query({
            text: 'SELECT * FROM events ',
        });
        if (result.rows == null)
            res.status(404).send("Not found");
        else
            res.status(200).json(result.rows);

        return ;

    });

    router.post("/",async(req,res)=>{
        const body=req.body;
        const result= await pgClient.query({
            text:"INSERT INTO events(nom,description,image,available_seats,localisation) VALUES($1,$2,$3,$4,$5)",
            values:[body.nom,body,description,body.image,body.available_seats,body.localisation]
        });
        return ;
    });

    router.put("/:id",async(req,res)=>{
        const body=req.body;
        let query="UPDATE events SET ";
        let tmp=false;/*Cette variable est utilisee pour ecrire une requete UPDATE dynamiquement en fonction des parametres en entreee*/
        for (let attr in body){
            if(tmp){
                query+=",";
                tmp=true;
            }
            query+=` ${attr} = '${body[attr]}' `;

        }
        query+=" WHERE id = "+req.params.id;
        try {
            const result=await pgClient.query({
                text:query
            });
            res.status(200).send("OK");
        } catch (error) {
            console.log("/*----------------------------------------------------------*/")
            console.log(query);
            console.log("/*----------------------------------------------------------*/")
            res.status(400).send("Requete invalide");
            throw error;
        }
        return;
        
    });

    router.delete("/:id",async(req,res)=>{
        
        const result= await pgClient.query({
            text:" DELETE FROM events WHERE id=$1",
            values:[req.params.id]
        });

        res.status(200).send("Deleted");
        return ;
    });

    return router;

}


module.exports = eventRouter;