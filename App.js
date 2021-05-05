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

