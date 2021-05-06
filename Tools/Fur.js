import Tool from "./Tool.js"
import {distanceBetween, angleBetween, getRandomInt} from "../Utils.js";

export default class Fur extends Tool {
    constructor(canvas, renderingContext, img, mode) {
        super(canvas, renderingContext);
        this.img = img;
        this.renderingContext.lineJoin = this.renderingContext.lineCap = mode;
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

            let currentPoint = {x: e.clientX, y: e.clientY};
            let dist = distanceBetween(this.lastPoint, currentPoint);
            let angle = angleBetween(this.lastPoint, currentPoint);
            let x;
            let y;
            for (let i = 0; i < dist; i++) {
                x = this.lastPoint.x + (Math.sin(angle) * i);
                y = this.lastPoint.y + (Math.cos(angle) * i);
                this.renderingContext.save();
                this.renderingContext.translate(x, y);
                this.renderingContext.scale(0.5, 0.5);
                this.renderingContext.rotate(Math.PI * 180 / getRandomInt(0, 180));
                this.renderingContext.drawImage(this.img, 0, 0);
                this.renderingContext.restore();
            }
            this.lastPoint = currentPoint;
        };
    }

    mouseUp() {
        this.canvas.onmouseup = () => {
            this.isDrawing = false;
        };
    }
}
