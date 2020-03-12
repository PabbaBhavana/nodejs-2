const express=require('express');
const app=express();
const mysql=require('mysql');
const conn=require('./database/connect')
const router=require('./routes/route');

app.use(router);
app.listen(3000,()=>{
console.log("server working on localhost 3000");
});