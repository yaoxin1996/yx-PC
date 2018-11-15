const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/news",(req,res)=>{
    //var sql=`SELECT * FROM wy_index_product WHERE l_id=1`;
    var sql=`SELECT * FROM wy_index_product`;
    pool.query(sql,(err,result)=>{
        //console.log(result);
        if(err) throw err;
        res.send(result);
    })
});

module.exports=router;