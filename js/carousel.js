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

    function updateImage() {
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
    }

    function carouselNext() {
        currentImageIndex = (currentImageIndex + 1) % imgPaths.length;
        updateImage();
        updateDots();
    }

    carousel_prev.onclick = carouselPrev;
    carousel_next.onclick = carouselNext;

    // 初始化第一张图片的显示和轮播点
    updateImage();
    updateDots();
});
