console.log("Sesion: TorusKnot con resize y cambio de material");


const canvas = document.getElementById("lienzo");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);


const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

//  Cámara
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 15;


const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1.2);
pointLight.position.set(10, 15, 10);
scene.add(pointLight);

const geometry = new THREE.TorusKnotGeometry(3, 1, 200, 32);
let material = new THREE.MeshPhongMaterial({ color: 0xff0055, shininess: 80 });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);



// Función para generar material aleatorio
function getRandomMaterial() {
  const randomColor = new THREE.Color(Math.random(), Math.random(), Math.random());

  const materials = [
    new THREE.MeshPhongMaterial({ color: randomColor, shininess: 100 }),
    new THREE.MeshStandardMaterial({ color: randomColor, metalness: 0.8, roughness: 0.3 }),
    new THREE.MeshLambertMaterial({ color: randomColor })
  ];

  // Selecciona uno al azar
  return materials[Math.floor(Math.random() * materials.length)];
}

//  Animación
function animate() {
  requestAnimationFrame(animate);

  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();

// Evento Resize -> cambia color/material
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  // Cambiar material aleatorio al redimensionar
  torusKnot.material = getRandomMaterial();
});
