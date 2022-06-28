"use strict";

let rotateX = 0, rotateY = 0;
let cursorPosX = 0, cursorPosY = 0;

window.addEventListener('mousemove', function(e) {
    if (cursorPosX < (e.pageX-2)) { rotateY += 2 }
    else if (cursorPosX > (e.pageX+2)) { rotateY -= 2}
    if (cursorPosY < (e.pageY-2)) { rotateX += 2 }
    else if (cursorPosY > (e.pageY+2)) { rotateX -= 2}
    cursorPosX = e.pageX;
    cursorPosY = e.pageY;

    document.querySelector('.rubiksCube').style.transform =
            'rotateY(' + rotateY + 'deg)'+'rotateX(' + rotateX + 'deg)';
}, false);


let view = 2000;

document.onkeydown = function(e) {
    if (e.keyCode === 38) view -=50
    else if (e.keyCode === 40) view +=50

    document.querySelector('.rubiksCube').style.perspective = view + 'px';
}