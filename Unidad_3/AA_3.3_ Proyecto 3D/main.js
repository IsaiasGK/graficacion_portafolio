import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const canvas = document.querySelector('#canvas');
const escena = new THREE.Scene();
escena.background = new THREE.Color(0xD4A373);

const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camara.position.set(0, 5, 10);

const renderizador = new THREE.WebGLRenderer({ canvas, antialias: true });
renderizador.setSize(window.innerWidth, window.innerHeight);

renderizador.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderizador.shadowMap.enabled = true;
renderizador.shadowMap.type = THREE.PCFShadowMap;

const luzAmb = new THREE.AmbientLight(0xffffff, 0.4);
escena.add(luzAmb);

const luzSol = new THREE.DirectionalLight(0xffffff, 0.8);
luzSol.position.set(5, 10, 2);
luzSol.castShadow = true;
luzSol.shadow.mapSize.width = 1024;
luzSol.shadow.mapSize.height = 1024;
luzSol.shadow.camera.bias = -0.005;
escena.add(luzSol);

const control = new OrbitControls(camara, renderizador.domElement);
control.enableDamping = true;
control.dampingFactor = 0.05;

const textureLoader = new THREE.TextureLoader();

const geometriaCubo = new THREE.BoxGeometry(1, 1, 1);
// Cambio opcional a MeshStandardMaterial para que funcionen roughness y metalness
const materialCubo = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: textureLoader.load('https://threejs.org/examples/textures/crate.gif'),
    roughness: 0.7,
    metalness: 0.1,
});
const cubo = new THREE.Mesh(geometriaCubo, materialCubo);
escena.add(cubo);
cubo.castShadow = true;

const pedestalArriba = 0.8;
const pedestalFondo = 1.0;
const pedestalAltura = 0.2;
const separacionPedestal = 0.8;
// Corrección: Se eliminó el texto inválido al final del comentario
const pedestalSegmentos = 6; 

const geometriaPedestal = new THREE.CylinderGeometry(pedestalArriba, pedestalFondo, pedestalAltura, pedestalSegmentos);
const materialPedestal = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
const pedestal = new THREE.Mesh(geometriaPedestal, materialPedestal);
pedestal.position.y = 0;
pedestal.castShadow = true;
pedestal.receiveShadow = true;
escena.add(pedestal);

const esferaRadio = 0.3;
const esferaSegmentos = 32;
const geometriaEsfera = new THREE.SphereGeometry(esferaRadio, esferaSegmentos, esferaSegmentos);
const materialEsfera = new THREE.MeshLambertMaterial({ color: 0xff0000 });
const esfera = new THREE.Mesh(geometriaEsfera, materialEsfera);
esfera.position.y = 2.5;
esfera.castShadow = true;
esfera.receiveShadow = true;
escena.add(esfera);

cubo.position.y = 0.2 + separacionPedestal;

window.addEventListener('resize', () => {
    camara.aspect = window.innerWidth / window.innerHeight;
    camara.updateProjectionMatrix();
    renderizador.setSize(window.innerWidth, window.innerHeight);
    renderizador.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

function animar() {
    cubo.rotation.y += 0.01;
    esfera.rotation.x += 0.01;
    control.update();
    renderizador.render(escena, camara);
}

renderizador.setAnimationLoop(animar);
