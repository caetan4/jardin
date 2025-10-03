console.log("teselacion y opart");
console.log("THREE: ", THREE);


const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const scene = new THREE.Scene();

//  Cámara
const camera = new THREE.PerspectiveCamera(55, canvas.width / canvas.height, 0.1, 1000);
camera.position.z = 40;

// Luces
const light1 = new THREE.PointLight("#b6b6b6", 900, 100);
light1.position.set(-1,- 1, 10);
scene.add(light1);

const light2 = new THREE.AmbientLight("#d7c0c0",10,80);
scene.add(light2);

// Material base
const material = new THREE.MeshPhongMaterial({
  color: "black",
  side: THREE.DoubleSide,
  shininess: 100
});

//Geometrria
const innerRadius = 2.0;
const outerRadius = 4.0;
const thetaSegments = 5;
const baseGeometry = new THREE.RingGeometry(innerRadius, outerRadius, thetaSegments);

//  Crear filas
const spacing = 5;
const gridSize = 5;
const rowGroups = []; // almacenamos cada fila

for (let j = -gridSize; j <= gridSize; j++) {
  const rowGroup = new THREE.Group(); // grupo por fila

  for (let i = -gridSize; i <= gridSize; i++) {
    const mesh = new THREE.Mesh(baseGeometry, material.clone());
    mesh.material.color = new THREE.Color((i + j) % 2 === 0 ? "white" : "black");

    mesh.position.x = i * spacing;
    mesh.position.y = j * spacing;
    mesh.rotation.z = (i + j) * 0.2;

    rowGroup.add(mesh);
  }

  scene.add(rowGroup);
  rowGroups.push(rowGroup); // guardamos la fila
}

// Render
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(canvas.width, canvas.height);

// 9. Animación (cada fila se mueve independiente)
function animate() {
  requestAnimationFrame(animate);

  rowGroups.forEach((row, index) => {
    // rotación distinta por fila
    row.rotation.z += 0.002 * (index % 2 === 0 ? 1 : -1);

    // movimiento ondulante en X
    row.position.x = Math.sin(Date.now() * 0.001 + index) * 2;
  });

  renderer.render(scene, camera);
}
animate();
