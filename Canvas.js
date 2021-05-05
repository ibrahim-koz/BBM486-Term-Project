class Canvas {
    constructor(canvasElement, renderingContext, tool) {
        this.canvasElement = canvasElement;
        this.renderingContext = renderingContext;
        this.setUpCanvas();
        this.setUpEventListeners();
        this.currentTool = tool;
    }

    setUpCanvas() {
        this.canvasElement.width = this.canvasElement.clientWidth;
        this.canvasElement.height = this.canvasElement.clientHeight;
    }

    setUpEventListeners() {
        window.onload = this.setUpCanvas;
        window.addEventListener('resize', () => {
            // Clear the canvas.
            this.renderingContext.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);

            // Draw it all again.
            this.setUpCanvas();
        })
    }

    changeCurrentTool(tool){
        this.currentTool = tool;
    }

    draw(){
        this.currentTool.draw();
    }

    changeColor(){
        this.currentTool.changeColor();
    }

    increaseSize(){
        this.currentTool.increaseSize();
    }

    decreaseSize(){
        this.currentTool.decreaseSize();
    }
}