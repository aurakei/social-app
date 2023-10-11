const Pool = require('pg').Pool;

const pool = new Pool ({
    user: "postgres",
    password: "H!ddenss!d4",
    host: "localhost",
    port: 5432,
    database: "socialdata", 
});
module.exports=pool;