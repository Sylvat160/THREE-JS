import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const axisHelper = new THREE.AxesHelper(5);
scene.add(axisHelper);

camera.position.set(0,2,5); 

const boxGeometry = new THREE.BoxGeometry(1,1,1);

renderer.render(scene, camera);