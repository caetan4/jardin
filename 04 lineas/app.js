// app.js
window.onload = function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const size = 1000;
  canvas.width = size;
  canvas.height = size;

  // --- Parámetros que puedes ajustar ---
  const numLinesX = 32;   // Número de líneas verticales
  const numLinesY = 62;   // Número de líneas horizontales
  const lineWidth = 5;    // Grosor de las líneas
  const spacingX = size / numLinesX-5; // Espaciado horizontal
  const spacingY = size / numLinesY; // Espaciado vertical
  const colorStart = "#ffd24bff"; // Color inicial del gradiente
  const colorEnd = "#513409ff";   // Color final del gradiente

  // Crear gradiente
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);

  ctx.strokeStyle = gradient;
  ctx.lineWidth = lineWidth;


  
  // Dibujar líneas verticales
  for (let i = 0; i <= numLinesX; i++) {
    const x = i * spacingX;
    ctx.beginPath();
    ctx.moveTo(x, 300);
    ctx.lineTo(x, size-300);
    ctx.stroke();
    ctx.lineWidth = 9;
  }
  
  // Crear gradiente
  const color01 = "#181c72ff"; // Color inicial del gradiente
  const color02 = "#bfdc93ff";   // Color final del gradiente

  const gradien = ctx.createLinearGradient(0, 0, size, size);
  gradien.addColorStop(1, color01);
  gradien.addColorStop(0, color02);
  ctx.strokeStyle = gradien;
 

  // Dibujar líneas horizontales
  for (let j = 0; j <= numLinesY; j++) {
    const y = j * spacingY;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(size, y);
  ctx.strokeStyle = gradien;
    ctx.stroke();
     ctx.lineWidth = 4;
  }
};
