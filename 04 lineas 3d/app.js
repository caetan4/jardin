console.log("Sesion: Grid 3D con BoxGeometry");

// 1. Definir nuestro canvas
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 2. Escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // Fondo negro en la escena

// 3. Cámara
const camera = new THREE.PerspectiveCamera(
  55,
  canvas.width / canvas.height,
  0.1,
  1000
);
camera.position.z = 80;

// 4. Renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(canvas.width, canvas.height);


const size = 100;         
const numLinesX = 32;      // Númd líneas verticales
const numLinesY = 62;      // Núm líneas horizontales
const spacingX = size / numLinesX;
const spacingY = size / numLinesY;

const lineWidth = 0.5;     
const lineDepth = 1;       

// Materiales
const materialVertical = new THREE.MeshPhongMaterial({
  flatShading: true,
  color: "#ffd24b",
  shininess: 100
});

const materialHorizontal = new THREE.MeshPhongMaterial({
  flatShading: true,
  color: "#181c72",
  shininess: 100
});

// === Líneas verticales ===
for (let i = 0; i <= numLinesX; i++) {
  const x = i * spacingX - size / 2;

  const geometry = new THREE.BoxGeometry(lineWidth, size * 0.4, lineDepth);
  const mesh = new THREE.Mesh(geometry, materialVertical);
  mesh.position.set(x, 0, 10);
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


const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const topLight = new THREE.PointLight("#ffffff", 2, 300);
topLight.position.set(0, 50, 50);
scene.add(topLight);

const frontLight = new THREE.PointLight("#bfdc93", 1.5, 250);
frontLight.position.set(30, 20, 40);
scene.add(frontLight);

// 5. Animación
function animate() {
  requestAnimationFrame(animate);

 scene.rotation.y += 0.001; // rotación lenta
  scene.rotation.x += 0.0001;

  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  renderer.setSize(canvas.width, canvas.height);
  camera.aspect = canvas.width / canvas.height;
  camera.updateProjectionMatrix();
});

