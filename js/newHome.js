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
document.addEventListener("DOMContentLoaded", function(){
    var advertisement1 = document.querySelector("#advertisement1");
    setTimeout(function (){
        advertisement1.style.display = "block";
    },3000);
    var closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", function(){
        advertisement1.style.display = "none";
    });
    var goOn = document.querySelector(".go-on");
    goOn.addEventListener("click", function(){
        //跳转到login
        // window.location.href = "login.html";
    });
})
