document.addEventListener('DOMContentLoaded', function () {
    var carousel_prev = document.querySelector(".carousel-prev");
    var carousel_next = document.querySelector(".carousel-next");
    var carousel_img = document.querySelector("#img-carousel");
    var dots = document.querySelectorAll('.dot'); // 获取所有轮播点
    var imgPaths = [
        'css/img/carousel-img/v2-9431604df9f77393f484e4f84193a66d.jpg',
        'css/img/carousel-img/v2-c31b0242d96a7709d1e402782c652ce8.jpg',
        'css/img/carousel-img/1695278325666.jpeg',
    ];

    var currentImageIndex = 0;

    function updateImage() {//通过索引获取图片路径，通过更改索引从而轮播图片
        carousel_img.src = imgPaths[currentImageIndex];
    }

    function updateDots() {
        dots.forEach(function (dot, index) {
            if (index === currentImageIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function carouselPrev() {
        currentImageIndex = (currentImageIndex - 1 + imgPaths.length) % imgPaths.length;
        updateImage();
        updateDots();
        resetInterval(); // 用户点击时重置自动轮播计时器
    }

    function carouselNext() {
        currentImageIndex = (currentImageIndex + 1) % imgPaths.length;
        updateImage();
        updateDots();
        resetInterval(); // 用户点击时重置自动轮播计时器
    }

    function startAutoCarousel() {
        intervalId = setInterval(function () {
            carouselNext();
        }, 3000); // 每隔三秒切换一次图片
    }
    function resetInterval() {//能够实现效果用户未点击三秒后自动轮播
        clearInterval(intervalId); // 清除当前的计时器
        startAutoCarousel(); // 重启计时器
    }

    carousel_prev.onclick = carouselPrev;
    carousel_next.onclick = carouselNext;

    // 初始化第一张图片的显示和轮播点
    updateImage();
    updateDots();

    // 初始启动自动轮播
    startAutoCarousel();


});
function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // var email = document.getElementById("email").value;
    if (username == "admin" && password == "24823yaj") {
        window.location.href = "newHome.html";
    } else {
        alert("用户名或密码错误");
    }
}