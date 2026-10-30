import * as THREE from 'three';

// ESCENA
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0f0); //0xf0f0f0 cámbiale el color al semáforo sin moverle a los colores de los círculos 

// CÁMARA 
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// WEBGL
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// OBJETOS MESH
const geometry = new THREE.BoxGeometry(3.5, 1.5, 1.5);
const material = new THREE.MeshStandardMaterial({
  color: 0x000000, // Color modificado a negro
  roughness: 0.3,
  metalness: 0.8
});
const cubo = new THREE.Mesh(geometry, material);
scene.add(cubo);

// 1. Crear la geometría para las luces (esferas que sobresaldrán del cubo)
const geometriaLuz = new THREE.SphereGeometry(0.4, 32, 32);

// 2. Crear los materiales con los colores del semáforo
const matRojo = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const matAmarillo = new THREE.MeshStandardMaterial({ color: 0xffff00 });
const matVerde = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

// 3. Crear los objetos Mesh combinando geometría y material
const luzRoja = new THREE.Mesh(geometriaLuz, matRojo);
const luzAmarilla = new THREE.Mesh(geometriaLuz, matAmarillo);
const luzVerde = new THREE.Mesh(geometriaLuz, matVerde);

// 4. Posicionar las luces
// El valor Z en 0.75 las coloca exactamente en la cara frontal de tu cubo (cuya profundidad es 1.5)
luzRoja.position.set(-1, 0, 0.75);
luzAmarilla.position.set(0, 0, 0.75);
luzVerde.position.set(1, 0, 0.75);

// 5. Añadir las luces como hijas del cubo principal
cubo.add(luzRoja);
cubo.add(luzAmarilla);
cubo.add(luzVerde);

// ILUMINACIÓN

const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);



// ANIMACIÓN
function animate() {
  requestAnimationFrame(animate);

  // Animación de rotación 3D continua
  cubo.rotation.x += 0.03;
  cubo.rotation.y += 0.03;

  renderer.render(scene, camera);
}

animate();

// RESPONSIVIDAD 
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
