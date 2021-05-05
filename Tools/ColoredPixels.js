import Tool from "./Tool.js"
class ColoredPixels extends Tool {
    constructor(canvas, renderingContext, mode, isDrawing, lastPoint) {
        super(canvas, renderingContext, mouseDown, mouseMove, mouseUp)
        this.mode = mode;
        this.isDrawing = isDrawing;
        this.lastPoint = lastPoint;
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
            drawPixels(this.renderingContext, e.clientX, e.clientY);
            this.lastPoint = {x: e.clientX, y: e.clientY};
        };
    }

    mouseUp() {
        this.canvas.onmouseup = function () {
            this.isDrawing = false;
        };
    }
}