import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/loaders/GLTFLoader.js';

function main() {
    let camera, scene, renderer;
    let mouseX = 0, mouseY = 0;

    init();
    animate();

    function init() {
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 5);

        const loader = new GLTFLoader();
        loader.load('./night_sky_visible_spectrum_monochromatic.glb', function (gltf) {
            scene.add(gltf.scene);
        }, undefined, function (error) {
            console.error('An error happened:', error);
            alert('Failed to load the 3D model.');
        });

        const light = new THREE.PointLight(0xffffff, .001);
        light.position.set(5, 5, 5);
        scene.add(light);

        document.addEventListener('mousemove', onDocumentMouseMove, false);
    }

    function onDocumentMouseMove(event) {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function animate() {
        requestAnimationFrame(animate);
        camera.lookAt(new THREE.Vector3(mouseX * 5, mouseY * 5, 0));
        renderer.render(scene, camera);
    }
}

main();
