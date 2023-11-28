var boxsmall = document.getElementById('box-small');
var boxbig = document.getElementById('box-big');
var mouse = document.getElementById('mouse');
var imgbig = document.getElementById('img-big');
function getMousePos(e) {
    var rect = boxsmall.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}
boxsmall.onmouseover = function(e) {
    mouse.style.top = getMousePos(e).y + 'px';
    mouse.style.left = getMousePos(e).x + 'px';
    mouse.style.display = 'block';
    boxbig.style.display = 'block';
    const imgLeft = getMousePos(e).x < 600 ? getMousePos(e).x * 2 : getMousePos(e).x * 2 - 600;
    imgbig.style.left = imgLeft + 'px';
    imgbig.style.top = getMousePos(e).y *2 + 'px';
}
boxsmall.onmouseout = function(e) {
    mouse.style.display = 'none';
    boxbig.style.display = 'none';
}