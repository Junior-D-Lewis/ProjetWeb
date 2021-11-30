const { Client } = require('pg');


function config(){
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        password: 'root',
        database: 'postgres'
    })
    
    client.connect();

    return client;
    
}


module.exports=config();