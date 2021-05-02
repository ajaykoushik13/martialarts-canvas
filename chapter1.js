const c = document.getElementById("playground");
const ctx = c.getContext("2d");

const drawLine = (start, end) => {
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y)
    ctx.stroke();
}

const drawCircle = (x, y, radius, angle, type = "fill") => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, angle)
    if (type == "fill") ctx.fill();
    else ctx.stroke();
}

// Head
drawCircle(300, 180, 50, Math.PI * 2, "stroke")

// Body
drawLine({ x: 300, y: 230 }, { x: 300, y: 380 })

// Hands
drawLine({ x: 300, y: 280 }, { x: 200, y: 220 })
drawLine({ x: 300, y: 280 }, { x: 400, y: 220 })

// Legs
drawLine({ x: 300, y: 380 }, { x: 200, y: 430 })
drawLine({ x: 300, y: 380 }, { x: 400, y: 430 })

// Eyes
drawCircle(280, 180, 5, Math.PI * 2)
drawCircle(320, 180, 5, Math.PI * 2)

// Mouth
drawCircle(300, 200, 10, Math.PI, "stroke")
