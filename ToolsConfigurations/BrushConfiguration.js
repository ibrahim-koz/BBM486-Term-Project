let img = new Image();
img.src = './img/brush2.png';

function distanceBetween(point1, point2) {
    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
}

function angleBetween(point1, point2) {
    return Math.atan2(point2.x - point1.x, point2.y - point1.y);
}

function mouseDown(canvas, isDrawing, lastPoint) {
    canvas.onmousedown = function (e) {
        isDrawing = true;
        lastPoint = {x: e.clientX, y: e.clientY};
    };
}

function mouseMove(canvas, renderingContext, x, y, isDrawing, lastPoint, img) {
    canvas.onmousemove = function (e) {
        if (!isDrawing) return;

        var currentPoint = {x: e.clientX, y: e.clientY};
        var dist = distanceBetween(lastPoint, currentPoint);
        var angle = angleBetween(lastPoint, currentPoint);

        for (var i = 0; i < dist; i++) {
            x = lastPoint.x + (Math.sin(angle) * i) - 25;
            y = lastPoint.y + (Math.cos(angle) * i) - 25;
            renderingContext.drawImage(img, x, y);
        }
        lastPoint = currentPoint;
    };
}

function mouseUp(canvas, isDrawing) {
    canvas.onmouseup = function () {
        isDrawing = false;
    };
}