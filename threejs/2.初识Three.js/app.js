// 声明全局变量
var scene, camera, geomerty, material, mesh, renderer, stats;

// 调用
init();
animate();

// 初始化
function init() {
  // 实例化场景
  scene = new THREE.Scene();

  // 实例化相机
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  // 移动相机位置
  camera.position.set(0, 0, 3);

  // 创建模型
  // width  — X轴上面的宽度，默认值为1
  // height — Y轴上面的高度，默认值为1
  // depth  — Z轴上面的深度，默认值为1 全部设置的相同的值，将渲染出一个标准的正立方体
  geomerty = new THREE.BoxGeometry(1, 1, 1); // 创建几何体

  material = new THREE.MeshNormalMaterial(); // 创建材质
  // material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  mesh = new THREE.Mesh(geomerty, material); // 创建网格 => 创建一个网格（模型）需要两种对象：几何体和材质

  // 将网格添加到场景
  scene.add(mesh);

  // 实例化渲染器
  renderer = new THREE.WebGLRenderer();
  // 设置渲染器的尺寸(宽高)
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 添加到dom
  document.body.appendChild(renderer.domElement);

  // 性能测框
  // 实例化一个stats对象
  stats = new Stats();
  // 把对象内生成的dom添加到页面当中
  document.body.appendChild(stats.dom);
}

// 运行动画
function animate() {
  // 循环调用函数
  requestAnimationFrame(animate);
  // 使立方体动起来
  mesh.rotation.x += 0.005; // 每帧网格模型的沿x轴旋转0.01弧度
  mesh.rotation.y += 0.005; // 每帧网格模型的沿y轴旋转0.02弧度

  // 更新性能插件
  stats.update();

  // 渲染器渲染:在循环调用的函数中，每一帧我们都让页面重新渲染相机拍摄下来的内容
  renderer.render(scene, camera);

}

window.onresize = function () {
  // 设置渲染器宽高
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 设置相机的宽高比
  camera.aspect = window.innerWidth / window.innerHeight;
  // 重新计算投影矩阵
  camera.updateProjectionMatrix();
}



