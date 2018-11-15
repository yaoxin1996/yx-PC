(async function (){
    if(location.search.indexOf("pid=")!=-1){
        var pid=location.search.split("=")[1];
        $.ajax({
            url:"http://127.0.0.1:3000/detail",
            type:"get",
            data:`pid=${pid}`,
            dataType:"json",
            success: function(res) {
                var {product,pics}=res;
                var {pname,price,details,subtitle}=product;
                var html=`<div class="line"> 
                            <span class="l-t t">${pname}</span>
                            <span class="l-t n">96.2%</span>
                        </div>
                        <div class="line">
                            <span class="l-f d">${subtitle}</span>
                            <span class="l-f p">好评率</span>
                        </div>`
                var div=document.getElementById("d1");
                div.innerHTML=html+div.innerHTML;
                /*导航*/
                var html='';
                var {category,pname}=product;
                html+=`<div>首页</div>
                            <span>></span>
                            <div><a href="#">${category}</a></div>
                            <span>></span>
                            <div><a href="#">${pname}</a></div>`
                var nav=document.getElementById("nav");
                nav.innerHTML=html;

                /*价格*/
                var html='';
                var html=`<span class="p-t">价格</span>
                        <span class="l-y">￥</span>
                        <span class="l-p">${price}</span>
                        <span class="l-s">超级会员专享价￥${price-20}</span>
                        <a href="#">立即开通></a>`
                        
                var div=document.getElementById("l1");
                div.innerHTML=html+div.innerHTML;

                var html='';
                var html=`${details}`
                var div=document.getElementById("d2");
                div.innerHTML=html+div.innerHTML;

                /*图片*/
                var html=``;
                for(var p of pics){
                    var {sm,lg}=p;
                    html+=`<li><img src="${lg}" data-sm="${sm}" alt=""></li>`;
                }
                    var ul=document.getElementById("s-img");
                    ul.innerHTML=html;
                    var mImg=document.querySelector("#container>div:nth-child(2)>#s1>#b-img>img");
                    console.log(pics)
                    mImg.src=pics[0].sm;
            }
        })
    }
    var $ul=$("#s-img");
    var $mImg=$("#container>div:nth-child(2)>#s1>#b-img>img");
    $ul.on("mouseover","img",function(){
        var $img=$(this);
        var sm=$img.attr("data-sm");
        $mImg.attr("src",sm);
    })
    /*加减按钮*/
    var n=parseInt($("#i1").val())
    $("#add").on("click",function(){
        var add=$(this);
        if(n<99){n++;}
        $("#i1").val(n);
    });
    $("#sub").on("click",function(){
        var sub=$(this);
        if(n>1){
            n--;
        }else{
            n=1;
        }
        $("#i1").val(n)
    })
    
    $.ajax({
        url:"http://127.0.0.1:3000/index/news",
        type:"get",
        dataType:"json",
        success:function(res){
            var html="";
            for(var key=1;key<res.length-34;key++){
                var p=document.getElementById("d-list");
                //console.log(p);
                var {title,pic,price,href}=res[key];
                //console.log(res[key]);
                html+=`<div class="dajia1">
                        <div class="d1-img">
                            <a href="http://127.0.0.1:3000/${href}"><img src="${pic}" alt=""></a>
                        </div>
                        <div class="d1-title">
                            <p class="d1-title-t"><a href="http://127.0.0.1:3000/${href}">${title}</a></p>
                            <p class="d1-title-b">¥${price}</p>
                        </div>
                    </div>`;
                    
                   }
                p.innerHTML=html;

                var html="";
                for(var key=3;key<res.length-32;key++){
                    var p=document.getElementById("on-p");
                    //console.log(p);
                    var {title,pic,price,href}=res[key];
                    //console.log(res[key]);
                    html+=`<div class="on-l">
                            <div class="d2-img on-list">
                                <a href="http://127.0.0.1:3000/${href}"><img src="${pic}" alt=""></a>
                            </div>
                            <div class="d2-title">
                                <p class="d1-title-t"><a href="http://127.0.0.1:3000/${href}">${title}</a></p>
                                <p class="d1-title-b">¥${price}</p>
                            </div>
                        </div>`;
                       }
                    p.innerHTML=html;

        }
    });
    $(".drop-menu").hide();
            //先实现单击按钮下拉
        $("[data-trigger=drop]").click(function(e){
            e.preventDefault();
            var $menu=$(".drop-menu");
            if($menu.is(":hidden")){
                $menu.show();
            }else
                $menu.hide();	
        })
        //再实现鼠标移入下拉
        $("[data-trigger=drop]").parent()
        .mouseover(function(){
            $(".drop-menu").show();
        })
        .mouseout(function(){
            $(".drop-menu").hide();
        });

        var t=$("#i1");
    $("#min").click(function(){
        /*var t = parseInt($(".btn_i").value);*/
        
        t.value++;
		/*t.val(parseInt(t.val())+1);*/
        
       
    

    })
})()