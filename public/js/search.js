    /*查询*/
(async function (){
    if(location.search.indexOf("kw=")!=-1){
        var kw=decodeURI(location.search.split("=")[1]);
        $.ajax({
            url:"http://127.0.0.1:3000/search/",
            type:"get",
            data:{kw},
            dataType:"json",
            success:function(res){
                //console.log(res);
                var html=``;
                var p=document.getElementById("product-list");
                for(var i=0;i<res.length;i++){
                    var {pname,pic,price,href,subtitle,pid}=res[i];
                    html+=`<div class="product">
                    <div class="p-img">
                        <a href="http://127.0.0.1:3000/detail.html?pid=${pid}"><img src="${pic}" alt=""></a>
                    </div>
                    <div class="p-t">
                        <p class="p-title"><a href="http://127.0.0.1:3000/detail.html?pid=${pid}">${pname}</a></p>
                        <p class="p-price">¥${price}</p>
                        <p class="p-d">${subtitle}</p>
                    </div>
                </div>`
                }
                p.innerHTML=html;
            }
        })    
    }
})()
