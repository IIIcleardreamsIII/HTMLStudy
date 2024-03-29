//长图特效
var boxx = document.getElementById("boxx");
var top1 = document.getElementById("top1");
var img = document.getElementById("img");
var under = document.getElementById("under");
var num = 0;
var timer;
top1.onmouseover = function () {
    timer = setInterval(up, 10);
    console.log("上面");
    function up () {
        num -= 2;
        num >= (-2499+700) ? (img.style.top = num + "px") : (clearInterval(timer))
    }
}
under.onmouseover = function () {
    timer = setInterval(down, 10);
    console.log("下面");
    function down () {
        num += 3;
        num < 0? (img.style.top = num + "px") : (clearInterval(timer))
    }
}
boxx.onmouseout = function () {
    clearInterval(timer);
}
//广告特效
var animationId ;
document.addEventListener("DOMContentLoaded", function(){
    var advertisement1 = document.querySelector("#advertisement1");
    setTimeout(function (){
        advertisement1.style.display = "block";
    },3000);
    var closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", function(){
        advertisement1.style.display = "none";
    });
    var goOn = document.querySelector(".go-on"), random;
    goOn.addEventListener("click", function(){
        window.location.href = "magnifier.html";
    });

    var speedX = 0.5; // 水平移动速度
    var speedY = 0.2; // 垂直移动速度

    function moveAd() {
        var currentLeft = parseFloat(advertisement1.style.left) || 0;
        var currentTop = parseFloat(advertisement1.style.top) || 0;

        var newLeft = currentLeft + speedX;
        var newTop = currentTop + speedY;

        // 如果广告碰到窗口边缘，则反向移动
        if (newLeft + advertisement1.offsetWidth > window.innerWidth || newLeft < 0) {
            speedX = -speedX;
        }
        if (newTop + advertisement1.offsetHeight > window.innerHeight || newTop < 0) {
            speedY = -speedY;
        }

        advertisement1.style.left = newLeft + 'px';
        advertisement1.style.top = newTop + 'px';

        animationId = requestAnimationFrame(moveAd); // 递归调用，创建平滑动画
    }

    moveAd(); // 启动动画

    advertisement1.onmouseover = function(){
        cancelAnimationFrame(animationId );
    }
    advertisement1.onmouseout = function(){
        moveAd()
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    var repositories = document.querySelector(".repositories");

    // 获取header的初始位置
    var initialHeaderTop = header.offsetTop;

    // 监听滚动事件
    window.addEventListener("scroll", function() {
        // 获取当前滚动位置
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // 如果滚动位置超过了header的初始位置，将header设为固定定位
        if (scrollTop > initialHeaderTop) {
            header.style.position = "fixed";
            header.style.top = "0";
            repositories.style.marginTop = header.offsetHeight + "px"; // 调整repositories的margin-top
        } else {
            // 恢复初始样式
            header.style.position = "fixed";
            header.style.top = initialHeaderTop + "px";
            repositories.style.marginTop = "0";
        }
    });
});
