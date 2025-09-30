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
const geome = new THREE.SphereGeometry(-.4,18,18);
const geom = new THREE.SphereGeometry(-.5,18,18);



const CylinderGeometryr= new THREE.CylinderGeometry( 1, 1, 4, 20 ); 
const CylinderMaterial= new THREE.MeshPhongMaterial( 
  {  flatShading: true, specular : "#725656ff", shininess: 100, color: "rgba(97, 51, 10, 1)"});

const cylinder = new THREE.Mesh( CylinderGeometryr, CylinderMaterial); scene.add( cylinder );
//const geomet = new THREE.SphereGeometry(1,18,18);
const material = new THREE.MeshPhongMaterial({
  flatShading: true, specular : "#725656ff", shininess: 10, color: "rgba(118, 141, 15, 1)"});

const mesh = new THREE.Mesh(geometry, material);
const mesh2 = new THREE.Mesh(geometr, material);
const mesh3 = new THREE.Mesh(geomet, material);

const FruitMaterial= new THREE.MeshPhongMaterial( 
  {  flatShading: true, specular : "#725656ff", shininess: 200, color: "rgba(128, 4, 4, 1)"});

const mesh4 = new THREE.Mesh(geome, FruitMaterial);
const mesh5 = new THREE.Mesh(geom, FruitMaterial);

scene.add(mesh);
scene.add(mesh2);
scene.add(mesh3);
scene.add(mesh4);
scene.add(mesh5);
scene.add(cylinder);
mesh.position.z = -8;
mesh2.position.z = -8;
mesh.position.x = -1;
mesh2.position.x = 1;
mesh3.position.x = 0;
mesh3.position.y = 1.7;
mesh3.position.z = -8;
cylinder.position.x = 0;
cylinder.position.y = -2;
cylinder.position.z = -9;
mesh4.position.x = -1;
mesh4.position.y = -.4;
mesh4.position.z = -6;
mesh5.position.x = .6;
mesh5.position.y = 1;
mesh5.position.z = -6;


//Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(canvas.width, canvas.height);

//Dar instrucciones de renderizar o imprimir nuestro primer frame
renderer.render(scene, camera);


// Tip para animar nuestro mesh:
function animate() {
    requestAnimationFrame(animate);


 renderer.render(scene, camera);
 }
 animate();

const topLight = new THREE.PointLight("#506b04ff", 100, 100);
topLight.position.y = 5;
scene.add(topLight);

const frontLight = new THREE.PointLight("#0000ff", 10, 100);
frontLight.position.set(3,1,3);
scene.add(frontLight);
