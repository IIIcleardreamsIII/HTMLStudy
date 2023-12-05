var boxsmall = document.getElementById('box-small');
var boxbig = document.getElementById('box-big');
var imgsmall = document.getElementById('img-small');
var mouse = document.getElementById('mouse');
var imgbig = document.getElementById('img-big');

function getMousePos(e) {
    var rect = boxsmall.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

boxsmall.onmousemove = function(e) {
    mouse.style.top = getMousePos(e).y + 'px';
    mouse.style.left = getMousePos(e).x + 'px';
    mouse.style.display = 'block';
    boxbig.style.display = 'block';

    const imgLeft = (getMousePos(e).x < 400) ? getMousePos(e).x * 2 : getMousePos(e).x * 2 - 300;
    const imgTop = (getMousePos(e).y <400) ? getMousePos(e).y * 2 : getMousePos(e).y * 2 - 300;

    imgbig.style.left = -imgLeft + 'px';
    imgbig.style.top = -imgTop + 'px';
}

boxsmall.onmouseleave = function() {
    mouse.style.display = 'none';
    boxbig.style.display = 'none';
}
/*问提总结
应该使用 boxsmall 而不是 imgsmall 来获取小盒子的边界矩形。
对于位置算法的设计不应该以大图为标准,应该以小图为标准。不然会导致大图的位置不对。
仍然存在图片过渡边界时过度不平滑的问题暂时无法解决
* */
var th1 = document.getElementById('img-small1-th');
var th2 = document.getElementById('img-small2-th');
var imgPaths= [
    'css/img/pms_1698307639.33065010.png',
    'css/img/pms_1698307414.06857812.png'
]

function updateImg1(imgPaths){
    var imgs = document.getElementById('img-small');
    var imgbig = document.getElementById('img-big');
    imgs.src = imgPaths[0];
    imgbig.src = imgPaths[0];
    imgs.onload = function(){
        imgs.src = imgPaths[1];
        imgbig.src = imgPaths[1];
    }
}
function updateImg2(imgPaths){
    var img = document.getElementById('img-small');
    var imgbig = document.getElementById('img-big');
    img.src = imgPaths[1];
    imgbig.src = imgPaths[1];
    img.onload = function(){
        img.src = imgPaths[0];
        imgbig.src = imgPaths[0];
    }
}
th1.onclick = function(){
    updateImg1(imgPaths);
}
th2.onclick = function(){
    updateImg2(imgPaths);
}
/*图片切换的总体思路为把图片路径存入数组，然后在点击按钮的时候，根据点击的按钮的序号，
将数组中的图片路径进行替换，然后再将图片路径赋值给img标签，这样就实现了图片的切换。**/