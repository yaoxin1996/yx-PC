const express=require("express");
const router=express.Router();
const pool=require("../pool");

//login
router.get('/',(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var sql='SELECT * FROM wy_user WHERE uname=? AND upwd=?';
    pool.query(sql,[uname,upwd],(err,result)=>{
      if(result.length>0){
        res.send({msg:1,res:result});
      }else{
        res.send({msg:0});
      }
    })
  })

module.exports=router;
