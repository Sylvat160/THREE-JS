import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const orbit = new OrbitControls(camera, renderer.domElement);

const axisHelper = new THREE.AxesHelper(5);
scene.add(axisHelper);

camera.position.set(-10,30,30); 
orbit.update();

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

// Big box
const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshBasicMaterial({color: 0xffffff , side: THREE.DoubleSide});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;

//grid helper 
const gridHelper = new THREE.GridHelper(30 );
scene.add(gridHelper);

//sphere 
const sphereGeometry = new THREE.SphereGeometry(4);
const sphereMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff , wireframe: true});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);


function animate(time){
    box.rotation.x = time / 1000;
    box.rotation.y = time / 1000;
    renderer.render(scene, camera);

}

renderer.setAnimationLoop(animate);