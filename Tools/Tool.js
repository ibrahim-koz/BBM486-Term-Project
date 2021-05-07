export default class Tool {
    constructor(canvas, renderingContext) {
        this.canvas = canvas;
        this.renderingContext = renderingContext;

        if (this.mouseDown === undefined) {
            throw new TypeError("Must override mouseDown");
        }
        if (this.mouseMove === undefined) {
            throw new TypeError("Must override mouseDown");
        }
        if (this.mouseUp === undefined) {
            throw new TypeError("Must override mouseDown");
        }
    }

    pick() {
        this.resetEventHandlers();
        this.mouseDown();
        this.mouseMove();
        this.mouseUp();
    }


    changeColor(){

    }

    increaseSize(){

    }

    decreaseSize(){

    }

    resetEventHandlers() {
        this.canvas.onmousedown = null;
        this.canvas.onmousemove = null;
        this.canvas.onmouseup = null;
    }
}