(async function (){
    $.ajax({
        url:"http://127.0.0.1:3000/products/xinpin",
        type:"get",
        dataType:"json",
        success: function(res){
            var html=``;
            var p=document.getElementById("left-b");
            var {title,pic,price,href,info}=res[2];
            html=`<div class="left-s">
                    <a href="http://127.0.0.1:3000/${href}"><img src="${pic}" alt=""></a>
                    <div class="talk">
                        ${info}
                    </div>
                </div>
                <div class="tp">
                    <span class="title"><a href="http://127.0.0.1:3000/${href}">${title}</a></span>
                    <span class="title-font">￥${price}</span>
                </div>`
            p.innerHTML=html;
            /*右-2*/    
            var html=``;
            var p=document.getElementById("right-t");
            for(var i=16;i<res.length-21;i++){
                var {title,pic,price,href,info}=res[i];
                html+=`<div class="small">
                        <a href="http://127.0.0.1:3000/${href}"><img src="${pic}" alt=""></a>
                        <div class="talk1">
                            ${info}
                        </div>
                        <span class="title"><a href="http://127.0.0.1:3000/${href}">${title}</a></span>
                        <span class="title-font">¥${price}</span>
                    </div>`
            }
            p.innerHTML=html;
        }    
    });    

    $.ajax({
        url:"http://127.0.0.1:3000/all_product/all",
        type:"get",
        dataType:"json",
        success: function(res){
            /*居家*/
            var html=``;
            var p=document.getElementById("product-list");
            for(var i=0;i<res.length-42;i++){
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
            /*鞋包配饰*/
            var html=``;
            var b=document.getElementById("f4");
            for(var i=25;i<res.length-22;i++){
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
            //console.log(b.innerHTML)
            b.innerHTML=html; 
            /*电器*/
            var html=``;
            var p=document.getElementById("f5");
            for(var i=41;i<res.length-16;i++){
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
            /*饮食*/
            var html=``;
            var p=document.getElementById("f6");
            for(var i=49;i<res.length-8;i++){
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
    });

        
    /*轮播*/
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
    });
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