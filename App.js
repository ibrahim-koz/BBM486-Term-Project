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
img.src =  "./img/brush2.png"
let brush = new Brush(c, ctx, img)
//brush.pick()

let coloredPixel = new ColoredPixels(c, ctx)
//coloredPixel.pick()

let fur = new Fur(c, ctx, img, 'round');
//fur.pick()

let simplePen = new SimplePen(c, ctx);
//simplePen.pick()

let spray = new Spray(c, ctx, 'round', 50);
spray.pick()