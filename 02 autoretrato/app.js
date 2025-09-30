// app.js
window.onload = function() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Definir tamaño cuadrado del lienzo
  const size = 600;
  canvas.width = size;
  canvas.height = size;

  // Fondo
  ctx.fillStyle = "#dbddc9ff";
  ctx.fillRect(0, 0, size, size);

  const cx = size / 2;
  const cy = size / 2;
// --- Círculo ---
  ctx.beginPath();
  ctx.arc(cx + 15, cy - 100, 200, 0, Math.PI * 2);
  ctx.fillStyle = "lightred";
  ctx.fill();
  ctx.strokeStyle = "lightblue";
  ctx.lineWidth = 7;
  ctx.stroke();
  // --- Rectángulos ---
  ctx.fillStyle = "rgba(151, 207, 67, 0.5)";
  ctx.fillRect(50, 20, 200, 120);

  ctx.fillStyle = "rgba(191, 155, 213, 0.7)";
  ctx.fillRect(390, 350, 280, 180);
  
  ctx.fillStyle = "rgba(238, 159, 140, 0.7)";
  ctx.fillRect(100, 200, 40, 40);
   ctx.fillRect(280, 220, 40, 40);


  // --- Círculo ---
  ctx.beginPath();
  ctx.arc(cx + -20, cy - 80, 20, 0, Math.PI * 2);
  ctx.arc(cx - 150, cy - 100, 20, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
 
  ctx.lineWidth = 3;
  
 

 
    // --- Semicírculo ---
  ctx.beginPath();
  ctx.arc(cx - 163, cy - 120, 10, false, Math.PI-0,0 ); // semicírculo arriba
  ctx.lineWidth = 6;
  ctx.strokeStyle = "darkblue";
   ctx.stroke();

  ctx.beginPath();
  ctx.arc(cx - 40, cy - 100, 10, false, Math.PI-0,0 ); // semicírculo arriba
  ctx.lineWidth = 6;
  ctx.strokeStyle = "darkblue";
  ctx.stroke();
  // --- Semicírculo ---
  ctx.beginPath();
  //ctx.arc(cx - 100, cy - -3, 10, false, Math.PI-1,0 ); // semicírculo arriba
ctx.lineWidth = 6;
  ctx.strokeStyle = "darkred";
  ctx.stroke();


  //curva Bézier ---
  ctx.beginPath();
  ctx.moveTo(10, cy + 300);
  ctx.bezierCurveTo(200, cy - 50, 400, cy + 300, 550, cy + 50);
  ctx.moveTo(100, cy + 800);
  ctx.bezierCurveTo(200, cy - 50, 400, cy + 300, 550, cy + 50);

  ctx.strokeStyle = "darkblue";
  ctx.lineWidth = 6;
  ctx.stroke();

  // --- Línea curva cuadrática ---
  ctx.beginPath();
  ctx.moveTo(100, 550);
  ctx.quadraticCurveTo(cx, 200, 570, 400);
  ctx.quadraticCurveTo(cx, 200, 570, 40);
  ctx.moveTo(10, 1700);
  ctx.quadraticCurveTo(cx, 200, 870, 400);
  ctx.quadraticCurveTo(cx, 70, 570, 20);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 7;
  ctx.stroke();

    for (let r = 30; r <= 90; r += 30) {
    ctx.beginPath();
    ctx.arc(cx + 200, cy - 200, r, 0, Math.PI * 2);
    ctx.strokeStyle = r % 60 === 0 ? "#7c0707ff" : "#628a75ff";
    ctx.lineWidth = 9;
    ctx.stroke();
  }
  
  // --- Círculo ---
 
  ctx.beginPath();
 
  ctx.arc(cx + 15, cy - 100, 100, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(182, 209, 227, 0.5)";
  ctx.fill();
  ctx.strokeStyle = "darkv";
  ctx.lineWidth = 9;
  ctx.stroke();
 
 ctx.beginPath();
  ctx.arc(cx + -200, cy - 120, 85, 0, Math.PI * 2);   
  ctx.fillStyle = "rgba(182, 209, 227, 0.5)";
  ctx.fill();
  ctx.strokeStyle = "darkred";
  ctx.lineWidth = 5;
  ctx.stroke();
};
