///////// SCAFFOLD
// Debug
console.log("Three.js:", THREE);
console.log("GSAP:", gsap);

const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//  Escena y cámara
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);
camera.position.z = 10;

const geometry = new THREE.TorusKnotGeometry(1.5, 0.5, 908, 80);
const material = new THREE.MeshPhongMaterial({
    color: "#ff295b",    
    specular: "#c63272",  
    shininess: 100,        
    flatShading: true
});

//  Mesh
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//  Luces
const frontLight = new THREE.PointLight("#ffffff", 200, 50);
frontLight.position.set(5, 5, 5);
scene.add(frontLight);

const rimLight = new THREE.PointLight("#0066ff", 100, 50);
rimLight.position.set(-5, -5, 5);
scene.add(rimLight);

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(canvas.width, canvas.height);
renderer.setClearColor("#0a0c2c");

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// btn
const boton = document.createElement("button");
boton.innerText = "Girar Mesh";
boton.style.position = "absolute";
boton.style.top = "20px";
boton.style.left = "20px";
boton.style.padding = "10px 20px";
boton.style.backgroundColor = "#e92650ff";
boton.style.color = "#ffffffff";
boton.style.border = "none";
document.body.appendChild(boton);

//  Evento click para animar usando GSAP
boton.addEventListener("click", () => {
    gsap.to(mesh.rotation, {
        duration: 2,
        y: mesh.rotation.y + Math.PI * 4, 
        ease: "power2.inOut"
    });
});


window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
