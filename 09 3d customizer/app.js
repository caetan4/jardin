console.log("Árbol interactivo");

const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const scene = new THREE.Scene();

//  Cámara
const camera = new THREE.PerspectiveCamera(55, canvas.width / canvas.height, 0.1, 1000);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(canvas.width, canvas.height);

//  Materiales y geometrías
const copaMaterial = new THREE.MeshPhongMaterial({ flatShading: true, color: "#76dd15" });
const frutaMaterial = new THREE.MeshPhongMaterial({ flatShading: true, color: "#800404" });
const troncoMaterial = new THREE.MeshPhongMaterial({ flatShading: true, color: "#61330a" });

const geoCopa1 = new THREE.SphereGeometry(1.5, 18, 18);
const geoCopa2 = new THREE.SphereGeometry(1.4, 18, 18);
const geoCopa3 = new THREE.SphereGeometry(1.5, 18, 18);
const geoFruta1 = new THREE.SphereGeometry(0.4, 18, 18);
const geoFruta2 = new THREE.SphereGeometry(0.5, 18, 18);
const geoTronco = new THREE.CylinderGeometry(1, 1, 4, 20);

const meshCopa1 = new THREE.Mesh(geoCopa1, copaMaterial);
const meshCopa2 = new THREE.Mesh(geoCopa2, copaMaterial);
const meshCopa3 = new THREE.Mesh(geoCopa3, copaMaterial);
const meshFruta1 = new THREE.Mesh(geoFruta1, frutaMaterial);
const meshFruta2 = new THREE.Mesh(geoFruta2, frutaMaterial);
const meshTronco = new THREE.Mesh(geoTronco, troncoMaterial);

// Posiciones
meshCopa1.position.set(-1, 0, -8);
meshCopa2.position.set(1, 0, -8);
meshCopa3.position.set(0, 1.7, -8);
meshFruta1.position.set(-1, -0.4, -6);
meshFruta2.position.set(0.6, 1, -6);
meshTronco.position.set(0, -2, -9);


scene.add(meshCopa1, meshCopa2, meshCopa3, meshFruta1, meshFruta2, meshTronco);


const topLight = new THREE.PointLight("#eaadbd", 400, 1000);
topLight.position.y = 5;
scene.add(topLight);

const frontLight = new THREE.PointLight("#34661e", 100, 1000);
frontLight.position.set(3, 1, 3);
scene.add(frontLight);


function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// 7. Botón para cambiar color
const boton = document.getElementById("cambiarColor");


const colores = ["#76dd15", "#f6f39e", "#ff6b6b", "#6bafff"];
let index = 0;

boton.addEventListener("click", () => {
  index = (index + 1) % colores.length; // Rotar entre colores
  const nuevoColor = colores[index];
  copaMaterial.color.set(nuevoColor);
  renderer.render(scene, camera);
});


window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
