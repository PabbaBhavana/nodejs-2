const mysql=require('mysql');
var connection=mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'Root',
    database:'employeedetails'
});
module.exports=connection;