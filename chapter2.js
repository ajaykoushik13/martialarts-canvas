const c = document.getElementById("playground");
const ctx = c.getContext("2d");

const height = 500;
const width = 500;

const centerWidth = (width / 2);
const centerHeight = (height / 2);

const getRandomNumber = (limit) => {
    return Math.floor(Math.random() * limit)
}

const getRandomColor = () => {
    const colors = ["red", "blue", "green", "black", "brown", "indigo"];
    return colors[getRandomNumber(colors.length)];
}

const clearCanvas = () => {
    ctx.clearRect(0, 0, c.width, c.height);
}

const drawLine = (start, end) => {
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y)
}

const fillStroke = (color) => {
    ctx.strokeStyle = color || getRandomColor()
    ctx.stroke();
}

const fillColor = (color) => {
    ctx.fillStyle = color || getRandomColor()
    ctx.fill();
}

const drawCircle = (x, y, radius, angle, reverse) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, angle, reverse)
}


const drawMouth = (expression) => {
    if (expression === "happy") {
        drawCircle(
            centerWidth,
            centerHeight + centerHeight * 0.2,
            centerWidth * 0.3,
            Math.PI,
            false
        )
    } else if (expression === "laugh") {
        drawMouth()
        drawMouth("happy")
    } else if (expression === "sad") {
        drawCircle(
            centerWidth,
            centerHeight + centerHeight * 0.4,
            centerWidth * 0.3,
            Math.PI,
            true
        )
    } else {
        drawLine(
            { x: centerWidth - centerWidth * 0.3, y: centerHeight + centerHeight * 0.2 },
            { x: centerWidth + centerWidth * 0.3, y: centerHeight + centerHeight * 0.2 }
        )
    }
    fillStroke("white")
}


const drawGeneralFace = () => {
    drawCircle(centerWidth, centerHeight, (centerWidth) - 50, Math.PI * 2)
    fillColor()
    drawCircle(centerWidth - centerWidth * 0.3, centerHeight - centerHeight * 0.2, 20, Math.PI * 2)
    fillColor("white")
    drawCircle(centerWidth + centerWidth * 0.3, centerHeight - centerHeight * 0.2, 20, Math.PI * 2)
    fillColor("white")
    drawCircle(centerWidth + centerWidth * 0.3, centerHeight - centerHeight * 0.2, 20, Math.PI * 2)
    drawMouth("sad")
}

drawGeneralFace()

document.getElementById("expression").addEventListener("change", ({ target: { value } }) => {
    clearCanvas()
    drawGeneralFace()
    drawMouth(value)
})


