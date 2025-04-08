import * as THREE from 'three';

// 1. 创建一个场景
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xF0F0F0);

// 2. 创建一个相机，设置相机的位置和旋转角度，设置相机的视野范围和投影方式
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. 创建一个物体，并添加至scene中
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x468585, emissive: 0x468585 });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 4. 创建一个光源，设置光源的位置和强度，并添加至scene中
const light = new THREE.DirectionalLight(0x9CDBA6, 100); 
light.position.set(1, 1, 1);
scene.add(light);

// 5. 创建一个渲染器，设置渲染器的尺寸，并将渲染器添加至DOM中
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// 6. 添加动画
function animate() {

    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // 渲染场景
    renderer.render(scene, camera);
}

animate();

// 6. 渲染场景
// renderer.render(scene, camera);