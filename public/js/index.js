//ajax请求
(async function(){
    $.ajax({
        url:"http://127.0.0.1:3000/index/news",
        type:"get",
        dataType:"json",
        success: function(res) {
            //console.log(res);
            /*链接*/
            var xinpin=document.querySelector(".container>div:nth-child(2)>.list-title1>h1");
            xinpin.onclick=function(){
                location.assign("http://127.0.0.1:3000/products.html");
            }
            var renqi=document.querySelector(".container>div:nth-child(3)>.list-title2>h1");
            renqi.onclick=function(){
                location.assign("http://127.0.0.1:3000/all_product.html");
            }
            var jujia=document.querySelector(".container>div:nth-child(4)>.list-title3>h1");
            jujia.onclick=function(){
                location.assign("http://127.0.0.1:3000/all_product.html");
            }
            var xiebao=document.querySelector(".container>div:nth-child(5)>.list-title3>h1");
            xiebao.onclick=function(){
                location.assign("http://127.0.0.1:3000/all_product.html");
            }
            var dq=document.querySelector(".container>div:nth-child(6)>.list-title3>h1");
            dq.onclick=function(){
                location.assign("http://127.0.0.1:3000/all_product.html");
            }
            var ys=document.querySelector(".container>div:nth-child(7)>.list-title3>h1");
            ys.onclick=function(){
                location.assign("http://127.0.0.1:3000/all_product.html");
            }


            //解构商品属性
            var html="";
            for(var key=0;key<res.length-34;key++){
                var p=document.getElementById("xinpin");
                //console.log(p);
                var {title,pic,price,href}=res[key];
                //console.log(res[key]);
                html+=`<div class="xinpin1">
                        <a href="http://127.0.0.1:3000/${href}"><img src="${pic}" alt=""></a>
                        <p><a href="http://127.0.0.1:3000/${href}" class="ms">${title}</a></p>
                        <p class="price">¥${price}</p>
                    </div>`;
                    
                   }
                p.innerHTML=html;
            //人气推荐
            //左
            var parent=document.getElementById("left");
            var {title,pic,price,href}=res[10];
            //console.log(res[10]);
            var html=`<div class="left-img">
                        <a href="http://127.0.0.1:3000/${href}"><img src="${pic}" alt=""></a>
                    </div>
                    <div class="left-b">
                        <p><a href="http://127.0.0.1:3000/${href}" class="left-p">${title}</a></p>
                        <p class="left-price">¥${price}</p>
                    </div>`;
                 parent.innerHTML=html;
            //右
            var html="";
            for(var i=11;i<res.length-20;i++){
                var parent1=document.getElementById("right");
                var {title,pic,price,href}=res[i];
                html+=`<div class="small">
                        <div class="small-img">
                            <a href="http://127.0.0.1:3000/${href}"><img src="${pic}" alt=""></a>
                        </div>
                        <div class="small-b">
                            <p><a href="http://127.0.0.1:3000/${href}" class="small-p">${title}</a></p>
                            <p class="small-price">¥${price}</p>
                        </div>
                    </div>`;
                    //console.log(res[i]);
            }
            parent1.innerHTML=html;
        }
    });

    $.ajax({
        url:"http://127.0.0.1:3000/all_product/all",
        type:"get",
        dataType:"json",
        success:function(res){
            //居家
            var html="";
            for(var i=0;i<res.length-57;i++){
                var parent=document.querySelector("#f3>div");
                var {pname,pic,price,href,p_sale,pid}=res[i];
                html+=`<div class="f3-list1">
                <div class="f3-img">
                    <a href="http://127.0.0.1:3000/detail.html?pid=${pid}"><img src="${pic}" alt=""></a>
                </div>
                <div class="f3-b">
                    <div class="f3-s">
                        <span>${p_sale}</span>
                    </div>
                    <p class="f3-p"><a href="http://127.0.0.1:3000/detail.html?pid=${pid}">${pname}</a></p>
                    <p class="f3-price">¥${price}</p>
                </div>
            </div> `;
            }
            parent.innerHTML=html;  
            
            //鞋包配饰
            var html="";
            for(var i=26;i<res.length-31;i++){
                var parent=document.querySelector("#f4>div");
                var {pname,pic,price,href,p_sale,pid}=res[i];
                html+=`<div class="f3-list1">
                    <div class="f3-img">
                        <a href="http://127.0.0.1:3000/detail.html?pid=${pid}"><img src="${pic}" alt=""></a>
                    </div>
                    <div class="f3-b">
                        <div class="f3-s">
                            <span>${p_sale}</span>
                        </div>
                        <p class="f3-p"><a href="http://127.0.0.1:3000/detail.html?pid=${pid}">${pname}</a></p>
                        <p class="f3-price">¥${price}</p>
                    </div>
                </div> `
            }
            parent.innerHTML=html;
            //console.log(res[i])

            //电器
            var html="";
            for(var i=42;i<res.length-15;i++){
                var parent=document.querySelector("#f5>div");
                var {pname,pic,price,href,p_sale,pid}=res[i];
                html+=`<div class="f3-list1">
                        <div class="f3-img">
                            <a href="http://127.0.0.1:3000/detail.html?pid=${pid}"><img src="${pic}" alt=""></a>
                        </div>
                        <div class="f3-b">
                            <div class="f3-s">
                                <span>${p_sale}</span>
                            </div>
                            <p class="f3-p"><a href="http://127.0.0.1:3000/detail.html?pid=${pid}">${pname}</a></p>
                            <p class="f3-price">¥${price}</p>
                        </div>
                    </div> `
            }
            parent.innerHTML=html;

            //饮食
            var html="";
            for(var i=49;i<res.length-8;i++){
                var parent=document.querySelector("#f6>div");
                var {pname,pic,price,href,p_sale,pid}=res[i];
                html+=`<div class="f3-list1">
                <div class="f3-img">
                    <a href="http://127.0.0.1:3000/detail.html?pid=${pid}"><img src="${pic}" alt=""></a>
                </div>
                <div class="f3-b">
                    <div class="f3-s">
                        <span>${p_sale}</span>
                    </div>
                    <p class="f3-p"><a href="http://127.0.0.1:3000/detail.html?pid=${pid}">${pname}</a></p>
                    <p class="f3-price">¥${price}</p>
                </div>
            </div> `
            }
            parent.innerHTML=html;

        }
    })
            
   

    /*轮播图*/
    $(function() {
        var bannerSlider = new Slider($('#banner_tabs'), {
            time: 5000,
            delay: 400,
            event: 'hover',
            auto: true,
            mode: 'fade',
            controller: $('#bannerCtrl'),
            activeControllerCls: 'active'
        });
        $('#banner_tabs .flex-prev').click(function() {
            bannerSlider.prev()
        });
        $('#banner_tabs .flex-next').click(function() {
            bannerSlider.next()
        });
    })
    $(function ($, window, document, undefined) {
        Slider = function (container, options) {
            "use strict"; //stirct mode not support by IE9-
            if (!container) return;
            var options = options || {},
                currentIndex = 0,
                cls = options.activeControllerCls,
                delay = options.delay,
                isAuto = options.auto,
                controller = options.controller,
                event = options.event,
                interval,
                slidesWrapper = container.children().first(),
                slides = slidesWrapper.children(),
                length = slides.length,
                childWidth = container.width(),
                totalWidth = childWidth * slides.length;
            function init() {
                var controlItem = controller.children();
                mode();
                event == 'hover' ? controlItem.mouseover(function () {
                    stop();
                    var index = $(this).index();
                    play(index, options.mode);
                }).mouseout(function () {
                    isAuto && autoPlay();
                }) : controlItem.click(function () {
                    stop();
                    var index = $(this).index();
                    play(index, options.mode);
                    isAuto && autoPlay();
                });
                isAuto && autoPlay();
        }
        //animate mode
        function mode() {
            var wrapper = container.children().first();
            options.mode == 'slide' ? wrapper.width(totalWidth) : wrapper.children().css({
                'position': 'absolute',
                'left': 0,
                'top': 0
            })
                .first().siblings().hide();
        }
        //auto play
        function autoPlay() {
            interval = setInterval(function () {
                triggerPlay(currentIndex);
            }, options.time);
        }
        //trigger play
        function triggerPlay(cIndex) {
            var index;
            (cIndex == length - 1) ? index = 0 : index = cIndex + 1;
            play(index, options.mode);
        }
        //play
        function play(index, mode) {
            slidesWrapper.stop(true, true);
            slides.stop(true, true);
            mode == 'slide' ? (function () {
                if (index > currentIndex) {
                    slidesWrapper.animate({
                        left: '-=' + Math.abs(index - currentIndex) * childWidth + 'px'
                    }, delay);
                } else if (index < currentIndex) {
                    slidesWrapper.animate({
                        left: '+=' + Math.abs(index - currentIndex) * childWidth + 'px'
                    }, delay);
                } else {
                    return;
                }
            })() : (function () {
                if (slidesWrapper.children(':visible').index() == index) return;
                slidesWrapper.children().fadeOut(delay).eq(index).fadeIn(delay);
            })();
            try {
                controller.children('.' + cls).removeClass(cls);
                controller.children().eq(index).addClass(cls);
            } catch (e) { }
            currentIndex = index;
            options.exchangeEnd && typeof options.exchangeEnd == 'function' && options.exchangeEnd.call(this, currentIndex);
        }
        //stop
        function stop() {
            clearInterval(interval);
        }
        //prev frame
        function prev() {
            stop();
            currentIndex == 0 ? triggerPlay(length - 2) : triggerPlay(currentIndex - 2);
            isAuto && autoPlay();
        }
        //next frame
        function next() {
            stop();
            currentIndex == length - 1 ? triggerPlay(-1) : triggerPlay(currentIndex);
            isAuto && autoPlay();
        }
        //init
        init();
        //expose the Slider API
        return {
            prev: function () {
                prev();
            },
            next: function () {
                next();
            }
        }
    };
}(jQuery, window, document));    
})()