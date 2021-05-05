mode = "round";
let isDrawing = null;
let lastPoint = null;


function drawPixels(renderingContext, x, y) {
    for (let i = -10; i < 10; i += 4) {
        for (let j = -10; j < 10; j += 4) {
            if (Math.random() > 0.5) {
                renderingContext.fillStyle = ['red', 'orange', 'yellow', 'green',
                    'light-blue', 'blue', 'purple'][getRandomInt(0, 6)];
                renderingContext.fillRect(x + i, y + j, 4, 4);
            }
        }
    }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mouseDown(canvas, isDrawing, lastPoint) {
    canvas.onmousedown = function (e) {
        isDrawing = true;
        lastPoint = {x: e.clientX, y: e.clientY};
    };
}


function mouseMove(canvas, renderingContext, isDrawing, lastPoint) {
    canvas.onmousemove = function (e) {
        if (!isDrawing) return;
        drawPixels(renderingContext, e.clientX, e.clientY);
        lastPoint = {x: e.clientX, y: e.clientY};
    };
}

function mouseUp(canvas, isDrawing) {
    el.onmouseup = function () {
        isDrawing = false;
    };
}