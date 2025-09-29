// app.js
window.onload = function() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Definir tamaño cuadrado del lienzo
  const size = 600;
  canvas.width = size;
  canvas.height = size;

  // Fondo
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, size, size);

  const cx = size / 2;
  const cy = size / 2;
// --- Círculo ---
  ctx.beginPath();
  ctx.arc(cx + 15, cy - 100, 200, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.strokeStyle = "orange";
  ctx.lineWidth = 3;
  ctx.stroke();
  // --- Rectángulos ---
  ctx.fillStyle = "rgba(0, 150, 255, 0.5)";
  ctx.fillRect(50, 50, 200, 120);

  ctx.fillStyle = "rgba(255, 100, 0, 0.7)";
  ctx.fillRect(350, 100, 180, 180);

  // --- Círculo ---
  ctx.beginPath();
  ctx.arc(cx + 15, cy - 100, 20, 0, Math.PI * 2);
  ctx.arc(cx - 100, cy - 100, 20, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.stroke();
 
  
  // --- Semicírculo ---
  ctx.beginPath();
  ctx.arc(cx - 150, cy - 50, 70, Math.PI, 0, false); // semicírculo arriba
  ctx.fillStyle = "limegreen";
  ctx.fill();
  ctx.strokeStyle = "darkgreen";
  ctx.stroke();

    ctx.beginPath();
  ctx.arc(cx - 150, cy - 50, 0, Math.PI, 0, false); // semicírculo arriba
  ctx.fillStyle = "limegreen";
  ctx.fill();
  ctx.strokeStyle = "darkgreen";
  ctx.stroke();

  // --- Línea curva Bézier ---
  ctx.beginPath();
  ctx.moveTo(50, cy + 150);
  ctx.bezierCurveTo(200, cy - 50, 400, cy + 300, 550, cy + 50);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 4;
  ctx.stroke();

  // --- Línea curva cuadrática ---
  ctx.beginPath();
  ctx.moveTo(80, 500);
  ctx.quadraticCurveTo(cx, 400, 520, 520);
  ctx.strokeStyle = "purple";
  ctx.lineWidth = 3;
  ctx.stroke();
};
