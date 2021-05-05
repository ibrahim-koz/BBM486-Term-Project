import Tool from "./Tool.js"
class SimplePen extends Tool {
    constructor(canvas, renderingContext, isDrawing, points) {
        super(canvas, renderingContext);
        this.isDrawing = isDrawing;
        this.points = points;
    }

    mouseDown() {
        this.canvas.onmousedown = function (e) {
            this.isDrawing = true;
            this.points.push({x: e.clientX, y: e.clientY});
        };
    }


    mouseMove() {
        this.canvas.onmousemove = function (e) {
            if (!this.isDrawing) return;

            this.renderingContext.clearRect(0, 0, this.renderingContext.canvas.width, this.renderingContext.canvas.height);
            this.points.push({x: e.clientX, y: e.clientY});

            this.renderingContext.beginPath();
            this.renderingContext.moveTo(this.points[0].x, this.points[0].y);
            for (let i = 1; i < this.points.length; i++) {
                this.renderingContext.lineTo(this.points[i].x, this.points[i].y);
            }
            this.renderingContext.stroke();
        };
    }


    mouseUp() {
        this.canvas.onmouseup = function () {
            this.isDrawing = false;
            this.points.length = 0;
        };
    }
}

