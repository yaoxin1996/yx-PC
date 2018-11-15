
$(function(){
    $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
    $.ajax({
        url:"header.html",
        type:"get",
        success: function(res){
            $(res).replaceAll("#header");
             /*搜索*/
            var $search=$("#search");
            var $input=$("#in");
            //console.log($input.val())
            $search.click(function(){
               location.href=`http://127.0.0.1:3000/search.html?kw=${$input.val().trim()}`
            });
            $input.keyup(function(e){
                if(e.keyCode==13)
                    $search.click()
            })
            if(location.search.indexOf("kw=")!=-1){
                //location.search=?kw=macbook
                var kw=location.search.split("=")[1]
                $input.val(decodeURI(decodeURI(kw)))
            }
            /*跳转登录注册页*/
            var login=document.getElementById("login-b");
            var reg=document.getElementById("register-b");
            login.onclick=function(){
                location.assign("http://127.0.0.1:3000/login.html");
            }
            reg.onclick=function(){
                location.assign("http://127.0.0.1:3000/register.html");
            }
            
            var yx=document.querySelector("#header>div:nth-child(2)>a>div");
            yx.onclick=function(){
                location.assign("http://127.0.0.1:3000/index.html");
            }
            var menu=document.getElementsByClassName("menu");
            var dropdownMenu=document.getElementsByClassName("dropdown-menu");
            /*鼠标移入主菜单显示响应下拉菜单，其他隐藏*/
            for(var i=0;i<menu.length;i++){
                menu[i].onmouseover=function(){
                    for(var i=0;i<dropdownMenu.length;i++){
                        dropdownMenu[i].style.display="none";
                    }
                    this.nextSibling.nextSibling.style.display="block";
                }
            }
            /*鼠标移出主菜单 所有子菜单隐藏*/
            for(var i=0;i<menu.length;i++){
                menu[i].onmouseout=function(){
                    for(var i=0;i<dropdownMenu.length;i++){
                        dropdownMenu[i].style.display="none";
                    }
                }
            }
            /*鼠标移入子菜单 子菜单依然显示*/
            for(var i=0;i<dropdownMenu.length;i++){
                dropdownMenu[i].onmouseover=function(){
                    this.style.display="block";
                }
            }
            /*鼠标移出 子菜单隐藏*/
            for(var i=0;i<dropdownMenu.length;i++){
                dropdownMenu[i].onmouseout=function(){
                    this.style.display="none";
                }
            }
        }
    })
})