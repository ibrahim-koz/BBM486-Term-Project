const c = document.getElementById("c");
const ctx = c.getContext("2d");

const setUpCanvas = () => {
    // Feed the size back to the canvas.
    c.width = c.clientWidth;
    c.height = c.clientHeight;
};

window.onload = setUpCanvas;

window.addEventListener('resize', () => {
    // Clear the canvas.
    ctx.clearRect(0, 0, c.width, c.height);

    // Draw it all again.
    setUpCanvas();
});

import Brush from "./Tools/Brush.js"
import ColoredPixels from "./Tools/ColoredPixels.js";
import Fur from "./Tools/Fur.js"
import SimplePen from "./Tools/SimplePen.js"
import Spray from "./Tools/Spray.js";

let img = new Image();

img.src = "./img/brush2.png"

let simplePen = new SimplePen(c, ctx);
let brush = new Brush(c, ctx, img)
let fur = new Fur(c, ctx, img, 'round');
let spray = new Spray(c, ctx, 'round', 50);
let coloredPixel = new ColoredPixels(c, ctx)


import Canvas from "./Canvas.js"

let canvas = new Canvas(c, ctx, simplePen);

import {GUI} from "./ExternalLibraries/dat.gui.module.js"

const gui = new GUI({autoPlace: false});
let GUIContainer = document.getElementById("gui-container");
GUIContainer.append(gui.domElement);

let tools = {
    "Simple Pen": simplePen,
    "Brush": brush,
    "Fur": fur,
    "Spray": spray,
    "Colored Pixel": coloredPixel
};

const menu = {
    color: '#FF0000',
    size: 10, // TODO: it will be changed to the default value of lineWidth of the rendering context.
    currentTool: simplePen
};

gui.add(menu, 'currentTool', Object.keys(tools)).name('Current Tool').onChange(key => {
    canvas.setCurrentTool(tools[key])
});

gui.addColor(menu, 'color').name('Color').onChange(color => {
    canvas.setColor(color)
})
gui.add(menu, 'size', 0, 100).name('Size').onChange(thickness => {
    canvas.setSize(thickness)
})

let obj = { "Clear Canvas": function(){ canvas.clearCanvas() }};

gui.add(obj,"Clear Canvas").name("");