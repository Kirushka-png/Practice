"use strict";

function Circle(positionX, positionY, radius, fill, stroke, stroke_width) {
    this.positionX = positionX || 0;
    this.positionY = positionY || 0;
    this.radius = radius || 7;
    this.fill = fill || randColor();
    this.stroke = stroke || randColor();
    this.stroke_width = stroke_width || 2;
    this.draw = function() {
        JScontentCreation.innerHTML +=
            `<circle cx="${this.positionX}" cy="${this.positionY}"
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

window.addEventListener('mousemove', function(e) {
    let c1 = new Circle(e.pageX, e.pageY);
    c1.draw();
}, false);