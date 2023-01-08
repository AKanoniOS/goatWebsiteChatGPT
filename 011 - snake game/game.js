const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let dx = 10;
let dy = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(x, y, 10, 10);
  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    dx = -10;
    dy = 0;
  } else if (event.code === "ArrowUp") {
    dx = 0;
    dy = -10;
  } else if (event.code === "ArrowRight") {
    dx = 10;
    dy = 0;
  } else if (event.code === "ArrowDown") {
    dx = 0;
    dy = 10;
  }
});

draw();
