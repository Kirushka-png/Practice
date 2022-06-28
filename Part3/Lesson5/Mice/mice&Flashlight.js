"use strict"
let m1 = document.getElementById('mouse01')
let m2 = document.getElementById('mouse02')
let m3 = document.getElementById('mouse03')
let x1 = m1.getAttribute('x')
let x2 = m2.getAttribute('x')
let y3 = m3.getAttribute('y')
let flashlight = document.getElementById("mask-circle")

window.addEventListener('mousemove', function(e) {
    let l = 90
    let dist1 = Math.sqrt(Math.pow((e.pageY - 85), 2) + Math.pow((e.pageX - 335), 2))
    if (dist1 < l) {
        let new_x1 = (parseInt(x1) - Math.abs(l - dist1))
        m1.setAttribute("x", new_x1)
    }
    let dist2 = Math.sqrt(Math.pow((e.pageY - 205), 2) + Math.pow((e.pageX - 490), 2))
    if (dist2 < l) {
        let new_x2 = (parseInt(x2) - Math.abs(l - dist2))
        m2.setAttribute("x", new_x2)
    }
    let dist3 = Math.sqrt(Math.pow((e.pageY - 185), 2) + Math.pow((e.pageX - 130), 2))
    if (dist3 < l) {
        let new_y3 = (parseInt(y3) + Math.abs(l - dist3))
        m3.setAttribute("y", new_y3)
    }
    flashlight.setAttribute("cx", e.pageX)
    flashlight.setAttribute("cy", e.pageY)
}, false)