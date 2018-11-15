const express=require("express");
const pool=require("../pool.js");
var router=express.Router();

//register
router.get('/',(req,res)=>{
    console.log(req.query);
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var user_name=req.query.user_name;
    var email=req.query.email;
    var phone=req.query.phone;
    if(!uname){
        res.send({msg:401,res:"uname required"});
        return;
    }
    var sql='INSERT INTO wy_user(uname,upwd,email,phone,user_name) VALUES(?,?,?,?,?)';
    pool.query(sql,[uname,upwd,email,phone,user_name],(err,result)=>{
        if(result.length>0){
            res.send({msg:1,res:result});
          }else{
            res.send({msg:0});
          }
    });
});
module.exports=router;