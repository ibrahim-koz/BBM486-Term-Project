import Tool from "./Tool.js"
class Fur extends Tool {
    constructor(canvas, renderingContext, img, isDrawing, lastPoint, x, y, mode) {
        super(canvas, renderingContext);
        this.img = img;
        this.isDrawing = isDrawing;
        this.lastPoint = lastPoint;
        this.x = x;
        this.y = y;
        this.renderingContext.lineJoin = this.renderingContext.lineCap = mode;
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
                x = this.lastPoint.x + (Math.sin(angle) * i);
                y = this.lastPoint.y + (Math.cos(angle) * i);
                this.renderingContext.save();
                this.renderingContext.translate(x, y);
                this.renderingContext.scale(0.5, 0.5);
                this.renderingContext.rotate(Math.PI * 180 / getRandomInt(0, 180));
                this.renderingContext.drawImage(img, 0, 0);
                this.renderingContext.restore();
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
