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