(async function (){
    $.ajax({
        url:"http://127.0.0.1:3000/products/xinpin",
        type:"get",
        dataType:"json",
        success: function(res){
            //console.log(res);
            var html=``;
            var p=document.getElementById("left-b");
            var {title,pic,price,href,info}=res[0];
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
            for(var i=1;i<res.length-36;i++){
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
            /*推荐关注-4*/
            var html=``;
            var p=document.getElementById("bottom-small");
            for(var i=3;i<res.length-32;i++){
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
            /*新品*/
            var html=``;
            var p=document.getElementById("product-list");
            for(var i=7;i<res.length-2;i++){
                var {title,pic,price,href,info}=res[i];
                html+=`<div class="product">
                        <div class="p-img">
                            <a href="http://127.0.0.1:3000/${href}"><img src="${pic}" alt=""></a>
                        </div>
                        <div class="p-t">
                            <p class="p-title"><a href="http://127.0.0.1:3000/${href}">${title}</a></p>
                            <p class="p-price">¥${price}</p>
                            <p class="p-d">${info}</p>
                        </div>
                    </div>`
            }
            p.innerHTML=html;
            /*预告*/
            var html=``;
            var p=document.getElementById("yg-list");
            for(var i=5;i<res.length-24;i++){
                var {title,pic,price,href,info}=res[i];
                html+=`<div class="product">
                        <div class="p-img">
                            <a class="yg" href="http://127.0.0.1:3000/${href}"><img src="${pic}" alt="">
                                <div class="jjsj">
                                    <span>即将上架</span>
                                    <div>上架提醒</div>
                                </div>
                            </a>
                        </div>
                        <div class="p-t">
                            <p class="p-title"><a href="http://127.0.0.1:3000/${href}">${title}</a></p>
                            <p class="p-price">¥${price}</p>
                            <p class="p-d">${info}</p>
                        </div>
                    </div>`
            }
            p.innerHTML=html;
        }
    });
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