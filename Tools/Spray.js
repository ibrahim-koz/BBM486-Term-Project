import Tool from "./Tool.js"
class Spray extends Tool {
    constructor(canvas, renderingContext, mode, clientX, clientY, timeout, density) {
        super(canvas, renderingContext, mouseDown, mouseMove, mouseUp);
        this.renderingContext.lineJoin = this.renderingContext.lineCap = mode;
        this.clientX = clientX;
        this.clientY = clientY;
        this.timeout = timeout;
        this.density = density;
    }

    mouseDown() {
        this.canvas.onmousedown = function (e) {
            clientX = e.clientX;
            clientY = e.clientY;

            this.timeout = setTimeout(function draw() {
                for (let i = this.density; i--;) {
                    let angle = getRandomFloat(0, Math.PI * 2);
                    let radius = getRandomFloat(0, 30);
                    this.renderingContext.globalAlpha = Math.random();
                    this.renderingContext.fillRect(
                        clientX + radius * Math.cos(angle),
                        clientY + radius * Math.sin(angle),
                        getRandomFloat(1, 2), getRandomFloat(1, 2));
                }
                if (!this.timeout) return;
                this.timeout = setTimeout(draw, 50);
            }.bind(this), 50);
        };
    }


    mouseMove() {
        this.canvas.onmousemove = function (e) {
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        };
    }

    mouseUp() {
        this.canvas.onmouseup = function () {
            clearTimeout(this.timeout);
        };
    }
}