mode = "round";
let isDrawing, lastPoint;

let x;
let y;

let img = new Image();
img.src = 'http://www.tricedesigns.com/wp-content/uploads/2012/01/brush2.png';
img.width = 10;


function distanceBetween(point1, point2) {
    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
}

function angleBetween(point1, point2) {
    return Math.atan2(point2.x - point1.x, point2.y - point1.y);
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

        var currentPoint = {x: e.clientX, y: e.clientY};
        var dist = distanceBetween(lastPoint, currentPoint);
        var angle = angleBetween(lastPoint, currentPoint);

        for (var i = 0; i < dist; i++) {
            x = lastPoint.x + (Math.sin(angle) * i);
            y = lastPoint.y + (Math.cos(angle) * i);
            renderingContext.save();
            renderingContext.translate(x, y);
            renderingContext.scale(0.5, 0.5);
            renderingContext.rotate(Math.PI * 180 / getRandomInt(0, 180));
            renderingContext.drawImage(img, 0, 0);
            renderingContext.restore();
        }

        lastPoint = currentPoint;
    };
}

function mouseUp(canvas, isDrawing){
    canvas.onmouseup = function() {
        isDrawing = false;
    };
}
