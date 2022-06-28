"use strict";

const quantnodes = 730;
const surfWidth = 900;
const surfHeight = 600;
const radiusLimit = 14;
const nodesDistance = surfHeight / Math.sqrt(quantnodes / (surfWidth / surfHeight));
const quantColumn = Math.floor(surfWidth / nodesDistance);
const quantRow = Math.floor(surfHeight / nodesDistance);
const ScrDiag = Math.sqrt(Math.pow(surfWidth, 2) + Math.pow(surfHeight, 2));

let globalCounter = 0;
let ctrArr = [];
let i = 0;
let outerCircle, innerCircle;
let L;
let density = 267;
let typeFig = 0.915;
let r = 103,
    g = 10,
    b = 5;
let hue = 0;

function Circle(id, positionX, positionY, radius, fill, stroke, stroke_width) {
    this.id = id || 0;
    this.positionX = positionX || 0;
    this.positionY = positionY || 0;
    this.radius = radius || 7;
    this.fill = fill || randColor();
    this.stroke = stroke || randColor();
    this.stroke_width = stroke_width || 2;
    this.draw = function() {
        JScontentCreation.innerHTML +=
            `<circle id="${this.id}" cx="${this.positionX}" cy="${this.positionY}"
            r="${this.radius}" fill="${this.fill}"
            stroke="${this.stroke}" stroke_width="${this.stroke_width}"/>`;
    }
}

function randColor() {
    let r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function surfaceBuilding() {
    let outerCircleArray = [];
    let innerCircleArray = [];
    for (let j = 0; j < quantRow; j++) {
        for (let k = 0; k < quantColumn; k++) {
            i++;
            outerCircleArray[i] = new Circle(i, k * nodesDistance,
                j * nodesDistance, 10, "black", randColor(), 2);
            outerCircleArray[i].draw();

            innerCircleArray[i] = new Circle("k" + i, k * nodesDistance,
                j * nodesDistance, 1, "yellow", randColor(), 1);

            innerCircleArray[i].draw();
            ctrArr.push([k * nodesDistance, j * nodesDistance]);
        }
    }
}

surfaceBuilding();

window.addEventListener('mousemove', function(e) {
    let radius, dx, dy;
    i = 0;
    for (let j = 0; j < quantRow; j++) {
        for (let k = 0; k < quantColumn; k++) {
            i++;
            let cx = ctrArr[i - 1][0],
                cy = ctrArr[i - 1][1];

            outerCircle = document.getElementById(i);
            innerCircle = document.getElementById("k" + i);

            L = Math.sqrt(Math.pow((e.pageX - cx), 2) + Math.pow((e.pageY - cy), 2));

            dx = (e.pageX - cx) * density / (Math.pow(L, typeFig));
            dy = (e.pageY - cy) * density / (Math.pow(L, typeFig));

            outerCircle.setAttribute("cx", cx + dx);
            outerCircle.setAttribute("cy", cy + dy);

            innerCircle.setAttribute("cx", cx + dx);
            innerCircle.setAttribute("cy", cy + dy);

            outerCircle.setAttribute("stroke", paintColor());
            outerCircle.setAttribute("fill", paintColor());

            radius = ScrDiag / L;
            if (radius > radiusLimit) radius = radiusLimit;
            outerCircle.setAttribute("r", radius);
            innerCircle.setAttribute("r", radius / 3);
        }
    }
}, false);

document.onkeydown = function(e) {
    if (e.keyCode === 38) { typeFig += 0.01 }
    if (e.keyCode === 40) { typeFig -= 0.01 }
    if (e.keyCode === 37) { density += 10 }
    if (e.keyCode === 39) { density -= 10 }
}

function rainbowColor() {
    globalCounter += 1;
    if ((globalCounter % 32) == 0) {
        if (hue < 360) { hue += 0.1 } else { hue = 0 }
    }
    return ("hsla(" + hue + ", 100%, 50%, 1.0)");
}

function paintColor() {
    function colorGenerator() {
        if (b < 256) b += 1
        else {
            b = 0;
            if (g < 10) g += 1
            else {
                g = 0
                if (r < 16) r += 1
                else r = 4;
            }
        }
    }
    globalCounter += 1;
    if ((globalCounter % 4) == 0) colorGenerator();
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}