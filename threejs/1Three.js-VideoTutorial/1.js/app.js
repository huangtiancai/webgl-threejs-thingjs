
// 需求：开始搭建一个场景，其中包含一个正在旋转的立方体

// 1.创建一个场景
// 创建一个场景 需要几个对象：场景、相机和渲染器 => 透过摄像机渲染出场景

// 场景scene
var scene = new THREE.Scene();

// 相机
// three.js里有几种不同的相机,这里使用的是PerspectiveCamera（透视摄像机）  Perspective - 透视

// 第一个参数是视野角度（FOV）
// 第二个参数是长宽比（aspect ratio）
// 第三个参数是近截面（near）
// 第四个参数是远截面（far）
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 渲染器
// Three.js同时提供了其他几种渲染器,当用户所使用的浏览器过于老旧，或者由于其他原因不支持WebGL时，可以使用这几种渲染器进行降级
var renderer = new THREE.WebGLRenderer();


// 设置渲染器的尺寸
// 渲染器渲染出的场景填充满我们的应用程序 => 因此，我们可以将渲染器宽高设置为浏览器窗口宽高
renderer.setSize(window.innerWidth, window.innerHeight);

// 对于性能比较敏感的应用程序来说，你可以使用setSize传入一个较小的值，例如window.innerWidth/2和window.innerHeight/2，这将使得应用程序在渲染时，以一半的长宽尺寸渲染场景
// renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

// 保持你的应用程序的尺寸，但是以较低的分辨率来渲染，你可以在调用setSize时，将updateStyle（第三个参数）设为false
// 前提<canvas> 标签现在已经具有了100%的宽和高
// 下面的渲染器将使得你的应用程序以一半的分辨率来进行渲染。
// renderer.setSize(window.innerWidth / 2, window.innerHeight / 2, false);


// 将renderer（渲染器）的dom元素（renderer.domElement）添加到我们的HTML文档中
// 这就是渲染器用来显示场景给我们看的<canvas>元素
document.body.appendChild(renderer.domElement);

// 创建一个立方体
// 创建一个立方体,需要一个BoxGeometry（立方体）对象 => 这个对象包含了一个立方体中所有的顶点（vertices）和面（faces）
// Geometry:几何
var geometry = new THREE.BoxGeometry(1, 1, 1);

// 材质 => 颜色
// Mesh:网格; Material:材料、材质
// 这里设置绿色
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Mesh（网格）
// 网格包含一个几何体以及作用在此几何体上的材质
var mesh = new THREE.Mesh(geometry, material);

// 将网格对象放入到我们的场景中，并让它在场景中自由移动
scene.add(mesh);
// 默认情况下，当我们调用scene.add()的时候，物体将会被添加到(0,0,0)坐标
// 但将使得摄像机和立方体彼此在一起，为了防止这种情况的发生，只需要将摄像机稍微向外移动一些即可
camera.position.z = 3;

// 2.渲染场景
// 渲染循环”（render loop）或者“动画循环”（animate loop）
// 这里创建了一个使渲染器能够在每次屏幕刷新时对场景进行绘制的循环（在大多数屏幕上，刷新率一般是60次/秒）
function animate() {
  // setInterval 也可以实现刷新，但是要指定时间
  // requestAnimationFrame 优点：
  //   1.不需要指定时间，默认60次 / 秒执行一次回调函数
  //   2.当用户切换到其它的标签页时，它会暂停，因此不会浪费用户宝贵的处理器资源，也不会损耗电池的使用寿命
  requestAnimationFrame(animate);
  // 使立方体动起来
  // 这段代码每帧都会执行（正常情况下是60次/秒）
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  // 使用渲染器渲染
  renderer.render(scene, camera);
}
// 调用
animate();


// 1.位置随浏览器窗口变化而变化
// 2.不随滚轮滚动放大或缩小
// 将函数赋予window.onresize
window.onresize = function () {
  // 设置渲染器宽高
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 设置相机的宽高比
  camera.aspect = window.innerWidth / window.innerHeight;
  // 重新计算投影矩阵
  camera.updateProjectionMatrix();
}

// 注意：
// 1.渲染器最后渲染出来的是<canvas>元素
// 2.每次操作都要渲染一次（每次场景、相机改变或者想要移动都要重新渲染）
//   将执行移动的代码加入“动画循环”循环函数中 => 每次执行“移动代码” 都会重新渲染 => 避免重复的代码
// 3.本机电脑刷新频率（Hz） 60Hz 60次/秒 => 1/60秒刷新一次
// 帧率fps  由显卡的性能来决定
// 刷新率Hz 由显示器的物理条件