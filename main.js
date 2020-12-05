var canvas = document.getElementById("canva");
var ctx = canvas.getContext("2d");
var color = "black";
var radius = "20";
var width = "4";
canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x, mouse_y);
}

function circle(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.arc(x, y, radius * 2, 0, width * Math.PI);
    ctx.stroke();
}

function clear_canva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("col_i").value = "";
}

function apply() {
    if (document.getElementById("wid").value == "") {
        window.alert("Please add width");
    } else {
        color = document.getElementById("col_i").value;
        width = document.getElementById("wid").value;
        radius = document.getElementById("rad").value;
    }

    if (document.getElementById("rad").value == "") {
        window.alert("Please add radius");
    } else {
        color = document.getElementById("col_i").value;
        width = document.getElementById("wid").value;
        radius = document.getElementById("rad").value;
    }
}