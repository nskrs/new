const mysql =require('mysql2')
const promise =require('promise')
const pool=mysql.createPool(
    {
        host:'localhost',
        user:'root',
        database:'node-complete',
        password:'nodecomplete',
       

        
    }
   
);
module.exports=pool.promise();
// host : 'localhost',
// user :'root',
// database: 'node-complete',
// password : 'nodecomplete'