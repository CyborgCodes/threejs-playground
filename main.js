import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

//Creating the scene
const scene = new THREE.Scene()
scene.fog = new THREE.Fog(0xcccccc, 10, 15);
scene.background = new THREE.Color('#20232e')
scene.backgroundBlurriness = 1

//First attr is the Field of view (FOV)
//Always use the width of the element divided by the height
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

//Renderer is a <canvas> element use to display the scene
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

//Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.LineBasicMaterial({ color: '#1f15e6' });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5

//Check browser compatibility 
if (WebGL.isWebGLAvailable()) {
  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.007;
    cube.rotation.y += 0.007;

    renderer.render(scene, camera);
  }

  animate()

} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById('container').appendChild(warning)
}


