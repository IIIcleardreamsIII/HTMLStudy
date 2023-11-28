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