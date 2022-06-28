let r3D1 = document.getElementById('cr1_2');
let r3D2 = document.getElementById('cr2');
let r3D3 = document.getElementById('cr3');

let keyframes = [
    {transform: 'rotate3d(0, 2, 1, 0deg)', offset: 0},
    {transform: 'rotate3d(0, 2, 1, 359deg)', offset: 1}
],
    keyframes1 = [
    {transform: 'rotate3d(2, 0, 1, 0deg)', offset: 0},
    {transform: 'rotate3d(2, 0, 1, 359deg)', offset: 1}
];

let options = {
    duration: 2000,
    easing: 'linear',
    delay: 0,
    iterations: Infinity,
    direction: 'normal',
    fill: 'forwards'
}

let kEffect = new KeyframeEffect(r3D1, keyframes, options);
let player = new Animation(kEffect, r3D1.ownerDocument.timeline);

let anim3D1 = r3D1.animate(keyframes, options);
let anim3D2 = r3D3.animate(keyframes1, options);

document.getElementById('pause').addEventListener('click', function() {
    anim3D1.pause();
    anim3D2.pause();
});
document.getElementById('play').addEventListener('click', function() {
    anim3D1.play();
    anim3D2.play();
});
document.getElementById('reverse').addEventListener('click', function() {
    anim3D1.reverse();
    anim3D2.reverse();
});
document.getElementById('cancel').addEventListener('click', function() {
    anim3D1.cancel();
    anim3D2.cancel();
});

let startTime = 7000, stepInMs = 200;
let i = 0, j = 200;

function start(timestamp) {
    let progress;
    progress = timestamp - startTime;
    if ((progress > stepInMs) & (i < 1800) & (anim3D1.playState === 'running')) {
        startTime = timestamp;
        i += 1; j -=1;
        stepInMs -= 10;
        r3D3.setAttribute("stroke-dasharray", i+" "+j);
    }
    requestAnimationFrame(start);
};
requestAnimationFrame(start);