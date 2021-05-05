mode = "round";
let clientX, clientY, timeout;
let density = 40;

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function mouseDown(canvas, renderingContext, timeout, density) {
    canvas.onmousedown = function (e) {
        clientX = e.clientX;
        clientY = e.clientY;

        timeout = setTimeout(function draw() {
            for (var i = density; i--;) {
                var angle = getRandomFloat(0, Math.PI * 2);
                var radius = getRandomFloat(0, 30);
                renderingContext.globalAlpha = Math.random();
                renderingContext.fillRect(
                    clientX + radius * Math.cos(angle),
                    clientY + radius * Math.sin(angle),
                    getRandomFloat(1, 2), getRandomFloat(1, 2));
            }
            if (!timeout) return;
            timeout = setTimeout(draw, 50);
        }, 50);
    };
}


function mouseMove(canvas, clientX, clientY){
    canvas.onmousemove = function(e) {
        clientX = e.clientX;
        clientY = e.clientY;
    };
}

function mouseUp(canvas, timeout){
    canvas.onmouseup = function() {
        clearTimeout(timeout);
    };
}

