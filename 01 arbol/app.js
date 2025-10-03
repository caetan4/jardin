console.log("Sesion 5. Ejercicio02: Geometrias");
console.log("THREE: ", THREE);

// 1. Definir nuestro canvas
const canvas = document.getElementById("lienzo")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 4. Creamos nuestros elementos básicos
// Escena, escenario, Mesh, Camras
//escena
const scene = new THREE.Scene();

//camara
const camera = new THREE.PerspectiveCamera(55, canvas.width/canvas.height, 0.1, 1000);
camera.position.z = 5;

//mesh
/////Geometrias
const geometry = new THREE.SphereGeometry(1.5,18,18);
const geometr = new THREE.SphereGeometry(1.4,18,18);
const geomet = new THREE.SphereGeometry(1.5,18,18);
const geome = new THREE.SphereGeometry(0.4,18,18); // negativo no es válido, cambié a positivo
const geom = new THREE.SphereGeometry(0.5,18,18);

// Cylinder
const CylinderGeometryr= new THREE.CylinderGeometry( 1, 1, 4, 20 ); 
const CylinderMaterial= new THREE.MeshPhongMaterial({  
    flatShading: true, 
    specular: "#725656",  // 👈 hex corregido
    shininess: 100, 
    color: "#61330a"       // 👈 hex corregido de rgba(97,51,10,1)
});
const cylinder = new THREE.Mesh( CylinderGeometryr, CylinderMaterial); 
scene.add( cylinder );

// Materiales
const material = new THREE.MeshPhongMaterial({
    flatShading: true, 
    specular: "#725656",  // 👈 hex corregido
    shininess: 10, 
    color: "#768d0f"       // 👈 hex corregido de rgba(118,141,15,1)
});

const mesh = new THREE.Mesh(geometry, material);
const mesh2 = new THREE.Mesh(geometr, material);
const mesh3 = new THREE.Mesh(geomet, material);

const FruitMaterial= new THREE.MeshPhongMaterial({  
    flatShading: true, 
    specular: "#725656",  // 👈 hex corregido
    shininess: 200, 
    color: "#800404"       // 👈 hex corregido de rgba(128,4,4,1)
});

const mesh4 = new THREE.Mesh(geome, FruitMaterial);
const mesh5 = new THREE.Mesh(geom, FruitMaterial);

// Agregar meshes a la escena
scene.add(mesh);
scene.add(mesh2);
scene.add(mesh3);
scene.add(mesh4);
scene.add(mesh5);
scene.add(cylinder);

// Posiciones
mesh.position.set(-1, 0, -8);
mesh2.position.set(1, 0, -8);
mesh3.position.set(0, 1.7, -8);
cylinder.position.set(0, -2, -9);
mesh4.position.set(-1, -0.4, -6);
mesh5.position.set(0.6, 1, -6);

//Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(canvas.width, canvas.height);

// Primer frame
renderer.render(scene, camera);

// Tip para animar nuestro mesh:
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Luces
const topLight = new THREE.PointLight("#d2ed88", 100, 100); // 👈 hex corregido
topLight.position.y = 5;
scene.add(topLight);

const frontLight = new THREE.PointLight("#9fb2e9", 100, 100);
frontLight.position.set(3,1,3);
scene.add(frontLight);
