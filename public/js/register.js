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
            /^\w{3,9}/,
            "用户名长度在3~9位之间",
            e
        )
        vali(
            "[name=upwd]",
            /^\w{6,12}/,
            "密码长度在6~12位之间",
            e
        )
        vali(
            "[name=email]",
            /.*@.*\.(com|cn|net)(\.cn)?/,
            "请输入合法邮箱",
            e
        )
        vali(
            "[name=phone]",
            /1[3-8]\d{9}/,
            "请输入合法手机号",
            e
        )
        vali(
            "[name=user_name]",
            /[\u4e00-\u9fa5]{2,8}/,
            "请输入真实姓名",
            e
        )
    });
    var btn=document.getElementById("sub");
    btn.onclick=function(){
        var uname=document.getElementById("uname").value;
        var upwd=document.getElementById("upwd").value;
        var email=document.getElementById("email").value;
        var phone=document.getElementById("phone").value;
        var user_name=document.getElementById("user_name").value;
        
        //console.log(uname.value);
        $.ajax({
        type:"get",
        url:"http://127.0.0.1:3000/register",
        dataType:"json",
        type:"get",
        data:`uname=${uname}&upwd=${upwd}&email=${email}&phone=${phone}&user_name=${user_name}`,
        success: function(result) {
            //console.log(result);
            if(result!==1){
                location.href="http://127.0.0.1:3000/index.html";
            //window.location.href="";
            }else{
                alert("登录失败");
            }
        }
        });
}
})();

