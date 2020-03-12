const express=require('express');
const connection=require('../database/connect');
const app=express();

//const mysql=require('mysql');
const route=express.Router();

route.use(express.json());
route.get('/emp/:id',async(req,res)=>{
    const id = req.params.id;
    connection.query(`select * from emp where emp.id=${id}`,(error,resu)=> {
        res.send(resu);

    });
});
route.get('/emp',(req,res)=>{
    connection.query(`SELECT * FROM emp where emp.id=?`,[req.params.id],(err,rows,fields)=> {
        if(!err)
        res.send(rows);
else
console.log(err);
    })
});
route.delete('/emp/:id',(req,res)=>{
    connection.query('DELETE FROM emp WHERE emp.id = ?',[req.params.id],(err,rows,fields)=>{
        if(!err)
        res.send('Deleted successfully');
        else
        console.log(err);
    })
});
route.put('/update/:id',(req,res)=>{
connection.query('UPDATE FROM emp WHERE emp.id =? SET emp.name=?',[req.params.id],[req.params.name],(err,rows,fields)=>{
        if(!err)
        res.send("updated successfully");
        else
        Console.log(err);
    })
});
module.exports=route;