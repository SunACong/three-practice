import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// 获取canvas元素
const cavas = document.getElementById('canvas');

// 1. 创建一个场景
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xF0F0F0);

// 2. 创建一个相机，设置相机的位置和旋转角度，设置相机的视野范围和投影方式
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. 创建两个物体，并添加至scene中
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: 0x468585, emissive: 0x468585 });
const cube = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshLambertMaterial({ color: 0xB4B4B3, emissive: 0xB4B4B3 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

scene.add(cube);
scene.add(box);

// 4. 创建一个光源，设置光源的位置和强度，并添加至scene中
const light = new THREE.SpotLight(0x006769, 100); 
light.position.set(1, 1, 1);
scene.add(light);

// 5. 创建一个渲染器，设置渲染器的尺寸，并将渲染器添加至DOM中
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// 6. 渲染场景
renderer.render(scene, camera);

// 7. 添加鼠标控制
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

// 8. 添加动画
function animate() {

    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    box.rotation.y += 0.01;

    controls.update();
    
    renderer.render(scene, camera);
}

// 9. 窗口大小改变时，重新设置渲染器的尺寸
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})

animate();