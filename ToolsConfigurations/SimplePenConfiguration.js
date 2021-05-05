isDrawing = false
points = []

function mouseDown(canvas, isDrawing, points) {
    canvas.onmousedown = function (e) {
        isDrawing = true;
        points.push({x: e.clientX, y: e.clientY});
    };
}


function mouseMove(canvas, renderingContext, isDrawing, points) {
    canvas.onmousemove = function (e) {
        if (!isDrawing) return;

        renderingContext.clearRect(0, 0, renderingContext.canvas.width, renderingContext.canvas.height);
        points.push({x: e.clientX, y: e.clientY});

        renderingContext.beginPath();
        renderingContext.moveTo(points[0].x, points[0].y);
        for (var i = 1; i < points.length; i++) {
            renderingContext.lineTo(points[i].x, points[i].y);
        }
        renderingContext.stroke();
    };
}


function mouseUp(canvas, isDrawing, points) {
    canvas.onmouseup = function () {
        isDrawing = false;
        points.length = 0;
    };
}