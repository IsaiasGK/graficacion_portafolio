import * as THREE from 'three';

// --- Creación de la escena ---
const scene = new THREE.Scene();

// MEJORA: Agregamos luces a la escena (mencionado en el paso 15 de la teoría)
const luzAmbiental = new THREE.AmbientLight(0xffffff, 0.5); // Luz suave general
scene.add(luzAmbiental);

const luzDirecta = new THREE.DirectionalLight(0xffffff, 1); // Luz tipo "sol" para crear brillo
luzDirecta.position.set(5, 5, 5);
scene.add(luzDirecta);

// Configuración de la cámara 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// --- Configuración del renderizador ---
const canvasElement = document.querySelector('#mi-canvas');
const renderer = new THREE.WebGLRenderer({ canvas: canvasElement, antialias: true }); // Mejora: antialias suaviza los bordes dentados

renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- Construcción de una malla ---
const geometry = new THREE.TorusGeometry(1.5, 0.5, 32, 100); // Mejora: Más segmentos para que se vea más redondo y suave

// 20. Instancia un material (Usamos MeshStandardMaterial para que reaccione a la luz)
const material = new THREE.MeshStandardMaterial({ 
    color: 0xff3366, // Un color rosa/rojizo vibrante
    roughness: 0.4,  // Qué tan opaco es
    metalness: 0.3   // Qué tan metálico se ve
});

// Instancia la clase THREE.Mesh
const miMalla = new THREE.Mesh(geometry, material);
//  Añade la malla al escenario
scene.add(miMalla);

//  Bucle de animación
//  Crea una función recursiva
function animate() {
    //  Sincroniza con la tasa de refresco
    requestAnimationFrame(animate);

    // Modifica propiedades para generar movimiento
    miMalla.rotation.x += 0.01;
    miMalla.rotation.y += 0.015;

    //  Ejecuta el dibujado
    renderer.render(scene, camera);
}

// Invoca la función por primera vez
animate();
