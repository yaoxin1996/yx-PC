//使用express构建web服务器
const express=require('express');

//引入路由模块
const index=require("./routes/index");
const products=require("./routes/products");
const all_product=require("./routes/all_product");
const detail=require("./routes/detail");
const search=require("./routes/search");
const login=require("./routes/login");
const register=require("./routes/register");
var app=express();
var server=app.listen(3000);
//托管静态资源
app.use(express.static('public'));
//使用路由器来管理路由
app.use("/index",index);
app.use("/products",products);
app.use("/all_product",all_product);
app.use("/detail",detail);
app.use("/search",search);
app.use("/login",login);
app.use("/register",register);
