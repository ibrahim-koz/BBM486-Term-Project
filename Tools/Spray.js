import Tool from "./Tool.js"
import {getRandomFloat} from "../Utils.js";

export default class Spray extends Tool {
    constructor(canvas, renderingContext, mode, density) {
        super(canvas, renderingContext);
        this.renderingContext.lineJoin = this.renderingContext.lineCap = mode;
        this.density = density;
    }

    mouseDown() {
        this.canvas.onmousedown = e => {
            this.clientX = e.clientX;
            this.clientY = e.clientY;

            let ref = this;
            ref.timeout = setTimeout(function draw() {
                for (let i = ref.density; i--;) {
                    let angle = getRandomFloat(0, Math.PI * 2);
                    let radius = getRandomFloat(0, 30);
                    ref.renderingContext.globalAlpha = Math.random();
                    ref.renderingContext.fillRect(
                        ref.clientX + radius * Math.cos(angle),
                        ref.clientY + radius * Math.sin(angle),
                        getRandomFloat(1, 2), getRandomFloat(1, 2));
                }
                if (!ref.timeout) return;
                ref.timeout = setTimeout(draw, 50);
            }, 50);
        };
    }


    mouseMove() {
        this.canvas.onmousemove = e => {
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        };
    }

    mouseUp() {
        this.canvas.onmouseup = () => {
            clearTimeout(this.timeout);
        };
    }
}