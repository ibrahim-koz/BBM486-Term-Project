import Tool from "./Tool.js";
import {distanceBetween, angleBetween} from "../Utils.js";
export default class Brush extends Tool {
    constructor(canvas, renderingContext, img) {
        super(canvas, renderingContext);
        this.img = img;
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

            for (let i = 0; i < dist; i++) {
                this.x = this.lastPoint.x + (Math.sin(angle) * i) - 25;
                this.y = this.lastPoint.y + (Math.cos(angle) * i) - 25;
                console.log(typeof this.img)
                this.renderingContext.drawImage(this.img, this.x, this.y);
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