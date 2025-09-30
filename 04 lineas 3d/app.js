// app.js
import * as THREE from "three";

window.onload = function () {
  // === Escena básica ===
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 150);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // --- Parámetros ---
  const size = 100;          // Tamaño base (como tu canvas 1000 pero reducido a escala 3D)
  const numLinesX = 32;      // Número de líneas verticales
  const numLinesY = 62;      // Número de líneas horizontales
  const spacingX = size / numLinesX;
  const spacingY = size / numLinesY;

  const lineWidth = 0.5;     // Grosor de las barras
  const lineDepth = 1;       // Profundidad de las barras

  // Materiales con gradientes simulados
  const materialVertical = new THREE.MeshBasicMaterial({ color: 0xffd24b });
  const materialHorizontal = new THREE.MeshBasicMaterial({ color: 0x181c72 });

  // === Líneas verticales ===
  for (let i = 0; i <= numLinesX; i++) {
    const x = i * spacingX - size / 2;

    const geometry = new THREE.BoxGeometry(lineWidth, size * 0.4, lineDepth);
    const mesh = new THREE.Mesh(geometry, materialVertical);
    mesh.position.set(x, 0, 0);
    scene.add(mesh);
  }

  // === Líneas horizontales ===
  for (let j = 0; j <= numLinesY; j++) {
    const y = j * spacingY - size / 2;

    const geometry = new THREE.BoxGeometry(size, lineWidth, lineDepth);
    const mesh = new THREE.Mesh(geometry, materialHorizontal);
    mesh.position.set(0, y, 0);
    scene.add(mesh);
  }

  // Luz para darle un poco más de presencia
  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(50, 50, 100);
  scene.add(light);

  // Animación
  function animate() {
    requestAnimationFrame(animate);
    scene.rotation.y += 0.002; // rotación lenta para apreciarlo
    renderer.render(scene, camera);
  }

  animate();

  // Ajustar a pantalla
  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
};
