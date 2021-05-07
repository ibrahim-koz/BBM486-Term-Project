export default class Canvas {
    constructor(canvasElement, renderingContext, tool) {
        this.canvasElement = canvasElement;
        this.renderingContext = renderingContext;
        this.setUpCanvas();
        this.setUpEventListeners();
        this.setCurrentTool(tool);
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

    setCurrentTool(tool){
        this.currentTool = tool;
        this.currentTool.pick();
    }

    setColor(color){
        this.renderingContext.strokeStyle = color;
    }

    setSize(thickness){
        this.renderingContext.lineWidth = thickness;
    }

    clearCanvas(){
        this.renderingContext.clearRect(0, 0, this.renderingContext.canvas.width, this.renderingContext.canvas.height);
    }
}