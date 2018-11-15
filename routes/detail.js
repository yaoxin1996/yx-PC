const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
    var pid=req.query.pid,obj={product:{},pics:[]};
    (async function (){
        //1.按pid查询商品信息
        var sql="SELECT * FROM wy_product WHERE pid=?";
        await new Promise(function(open){
            pool.query(sql,[pid],(err,result)=>{
                //console.log(result);
                if(err) throw err;
                obj.product=result[0];
                open();
            })
        })
        //按pid查询图片列表
        var sql=`SELECT * FROM yx_product_pic WHERE p_id=?`;
        await new Promise(function(open){
            pool.query(sql,[pid],(err,result)=>{
                if(err) throw err;
                obj.pics=result;
                open();
            })
        })
        //返回结果
        res.send(obj);
    })()
})

module.exports=router;