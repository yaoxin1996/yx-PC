const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/all",(req,res)=>{
    var sql=`SELECT * FROM wy_product`;
    pool.query(sql,(err,result)=>{
        //console.log(result);
        if(err) throw err;
        res.send(result);
    })
})

module.exports=router;