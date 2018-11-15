(async function(){
    function vali(selector,reg,msg,e){
        var $txt=$(selector);
        if(reg.test($txt.val()))
        $txt.next().html("<img src='img/ok.png'>");
        else{
            $txt.next().html(`<img src='img/err.png'>${msg}`);
            e.preventDefault();
        }
    }
    $("form").submit(function(e){
        vali(
            "[name=uname]",
            /^\w{6,9}/,
            "用户名长度在6~9位之间",
            e
        )
        vali(
            "[name=upwd]",
            /^\w{6,12}/,
            "密码长度在6~12位之间",
            e
        )
    });
    var btn=document.getElementById("sub");
    btn.onclick=function(){
        var uname=document.getElementById("uname");
        var upwd=document.getElementById("upwd");
        /*var uname=uname.value;
        var upwd=upwd.value;*/
        //console.log(uname,upwd)
        $.ajax({
            url:"http://127.0.0.1:3000/login",
            type:"get",
            data:`uname=${uname.value}&upwd=${upwd.value}`,
            dataType:"json",
            success: function(result) {
                //console.log(result);
                if(result.msg==1){
                    //alert("登录成功");
                    sessionStorage.setItem("uname",uname.value);
                    location.href="http://127.0.0.1:3000/index.html";
                //window.location.href="";
                }else{
                     //alert("登录失败");
                }
            }
          });
    }
   
    })();
    