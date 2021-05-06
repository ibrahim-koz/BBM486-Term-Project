import Tool from "./Tool.js"
import {getRandomInt} from "../Utils.js";

export default class ColoredPixels extends Tool {
    constructor(canvas, renderingContext) {
        super(canvas, renderingContext)
    }

    mouseDown() {
        this.canvas.onmousedown = e => {
            this.isDrawing = true;
            this.lastPoint = {x: e.clientX, y: e.clientY};
        };
    }

    mouseMove() {
        this.canvas.onmousemove = e => {
            if (!this.isDrawing) return;
            this.drawPixels(e.clientX, e.clientY);
            this.lastPoint = {x: e.clientX, y: e.clientY};
        };
    }

    mouseUp() {
        this.canvas.onmouseup = () => {
            this.isDrawing = false;
        };
    }

    drawPixels(x, y) {
        for (let i = -10; i < 10; i += 4) {
            for (let j = -10; j < 10; j += 4) {
                if (Math.random() > 0.5) {
                    this.renderingContext.fillStyle = ['red', 'orange', 'yellow', 'green',
                        'light-blue', 'blue', 'purple'][getRandomInt(0, 6)];
                    this.renderingContext.fillRect(x + i, y + j, 4, 4);
                }
            }
        }
    }
}
