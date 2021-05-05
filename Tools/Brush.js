import Tool from "./Tool.js"
class Brush extends Tool {
    constructor(canvas, renderingContext, img, isDrawing, lastPoint, x, y) {
        super(canvas, renderingContext);
        this.img = img;
        this.isDrawing = isDrawing;
        this.lastPoint = lastPoint;
        this.x = x;
        this.y = y;
    }

    mouseDown() {
        this.canvas.onmousedown = function (e) {
            this.isDrawing = true;
            this.lastPoint = {x: e.clientX, y: e.clientY};
        };
    }

    mouseMove() {
        this.canvas.onmousemove = function (e) {
            if (!this.isDrawing) return;

            let currentPoint = {x: e.clientX, y: e.clientY};
            let dist = distanceBetween(this.lastPoint, currentPoint);
            let angle = angleBetween(this.lastPoint, currentPoint);

            for (let i = 0; i < dist; i++) {
                this.x = this.lastPoint.x + (Math.sin(angle) * i) - 25;
                this.y = this.lastPoint.y + (Math.cos(angle) * i) - 25;
                this.renderingContext.drawImage(this.img, this.x, this.y);
            }
            this.lastPoint = currentPoint;
        };
    }

    mouseUp() {
        this.canvas.onmouseup = function () {
            this.isDrawing = false;
        };
    }

}