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

  scene.add(mesh);  // 将网格添加到场景


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


  // 使用dat.GUI实现页面调试
  // 设置需要修该的数据/需要控制的数据（对象）
  controls = {
    positionX: 0,
    positionY: 0,
    positionZ: 0
  };
  // 实例化dat.GUI对象，将需要修改的配置添加对象中，并监听变化回调
  gui = new dat.GUI();
  gui.add(controls, "positionX", -1, 1).onChange(updatePosition);
  gui.add(controls, "positionY", -1, 1).onChange(updatePosition);
  gui.add(controls, "positionZ", -1, 1).onChange(updatePosition);
  // 每次都修改对象里面的值以后，都会触发updatePosition回调 => 来更新模型的位置
  function updatePosition() {
    mesh.position.set(controls.positionX, controls.positionY, controls.positionZ);
  }
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


// 控制浏览器窗口尺寸
window.onresize = function () {
  // 设置渲染器宽高
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 设置相机的宽高比
  camera.aspect = window.innerWidth / window.innerHeight;
  // 重新计算投影矩阵
  camera.updateProjectionMatrix();
}

test();

// 测试
function test() {
  // 判断一个对象是否是继承至THREE.Object3D 继承返回 true 否则返回false
  // scene,camera,geomerty,mesh => 继承
  // material,renderer,stats    => 不继承
  console.log(mesh instanceof THREE.Object3D);

  // 获取一个3d对象
  // console.log(scene.getObjectById(1)); //返回id值为1的3d对象

  // 隐藏一个3d对象
  // mesh.visible = false; // 设置为false，模型将不会被渲染到场景内

  // 彻底删除一个3d对象
  // scene.remove(mesh);

  // 获取到所有的子类 => 每一个3d对象都有一个children属性，这是一个数组，里面包含所有添加的3d对象
  // console.log(scene.children); // Array

  // 获取3d对象下面所有的3d对象
  // .traverse ( callback : Function )
  scene.traverse(function (child) {
    // 打印 scene及scene对象下所有的3d对象
    // console.log(child); 
  })

  // 获取3d对象的父元素
  console.log(mesh.parent); // scene
  console.log(mesh.parent == scene); // true

  // 修改3d对象的位置，大小和转向
  // 1.修改位置方式
  // 通过设置模型的position属性进行修改模型的当前位置，具体方法有以下几种：
  // 1）单独设置每个方向的属性
  // mesh.position.x = 3;   // 将模型的位置调整到x正轴距离原点为3的位置 
  // mesh.position.y += 5;  // 将模型的y轴位置以当前的位置向上移动5个单位
  // mesh.position.z -= 6;
  // 2）直接一次性设置所有的
  // mesh.position.set(3, 5, -6); //  //直接将模型的位置设置在x轴为3，y轴为5，z轴为-6的位置
  // 3）直接重新赋值一个新的对象
  // mesh.position = new THREE.

}