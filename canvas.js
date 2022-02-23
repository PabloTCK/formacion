let canvas = document.getElementById("canvas"); // use canvas
if (canvas && canvas.getContext) { // if canvas can be accessed

    let context = canvas.getContext("2d"); // prepare surface

    context.beginPath(); // prepare to draw
    context.moveTo(25, 25); // starting point (X, Y)
    context.lineTo(25, 50); // draw line from previous point to this one
    context.lineTo(50, 50);
    context.lineTo(50, 75);
    context.lineTo(75, 75);
    context.lineTo(75, 100);
    context.lineTo(100, 100);
    context.lineTo(75, 50);
    context.closePath; // close figure
    context.fillStyle = "#a05"; // choose colour
    context.fill(); // fill figure

    context.clearRect(57.5, 57.5, 10, 10); // empty rectangle/square (X coord upper left, Y coord upper left, width, height)
    context.fillStyle = "#0f0";
    context.fillRect(75, 25, 25, 25); // like clear, but filled with colour

    context.save(); // take a snapshot of the context

    context.scale(-0.25, -0.25); // reduce image by a quarter and mirror it
    context.translate(-500, -125); // move image (negative values used because the axes are negative after calling .scale())

    // Repeat figure (in b&w) ------
    context.beginPath();
    context.moveTo(25, 25);
    context.lineTo(25, 50);
    context.lineTo(50, 50);
    context.lineTo(50, 75);
    context.lineTo(75, 75);
    context.lineTo(75, 100);
    context.lineTo(100, 100);
    context.lineTo(75, 50);
    context.closePath;
    context.fillStyle = "#000";
    context.fill();
    context.clearRect(57.5, 57.5, 10, 10);
    context.fillStyle = "#aaa";
    context.fillRect(75, 25, 25, 25);
    // end repeat figure -----------

    context.restore(); // superimpose saved image onto canvas
}
