const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
    //http://127.0.0.1:3000/search.html?kw=%E7%94%B5%E5%99%A8
    var kw=req.query.kw;
    var kws=kw.split(" ");
    kws.forEach(function(elem,i,kws){
        kws[i]=`pname like '%${elem}%'`
    })
    var str=kws.join(" and ")
    var where=` where ${str} `
    var sql=`SELECT * FROM wy_product`;
    sql+=where;
    //console.log(sql);
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
    
    //测试 http://127.0.0.1:3000/all_product?kw=四件套
})
module.exports=router;