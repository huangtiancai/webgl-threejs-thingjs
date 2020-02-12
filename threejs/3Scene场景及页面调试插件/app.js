// 声明全局变量
var scene, camera, geomerty, material, mesh, renderer, stats, controls, gui;
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
  // 1.设置需要修该的数据/需要控制的数据（对象）
  controls = {
    positionX: 0,
    positionY: 0,
    positionZ: 0
  };
  // 2.实例化dat.GUI对象
  gui = new dat.GUI();

  // 1)生成一个输入框
  // dat.GUI能够根据controls值的不同生成不同的操作方法
  // 如果值的类型为字符串或者数字类型，则可以生成一个默认的输入框
  // gui.add(controls, "positionX");
  // gui.add(controls, "positionY");
  // gui.add(controls, "positionZ");

  // 2)生成一个checkbox
  // 如果controls的值是一个布尔类型的，使用gui.add()方法就可以生成一个复选框
  // true:勾选；false:不勾选
  // gui.add(controls, "positionX");
  // gui.add(controls, "positionY");
  // gui.add(controls, "positionZ");

  // 3)生成一个可以滑动的滑块
  // 使用gui.add()方法如果值为数字类型传入第三个值（最小值）和第四个值（最大值） => 限制了值的能够取值的范围，就能够生成可以滑动的滑块
  // gui.add(controls, "positionX", -1, 1);  //设置了最小值和最大值，可以生成滑块
  // gui.add(controls, "positionY").max(1);  //只设置了最大值，无法生成滑块
  // gui.add(controls, "positionZ").min(-1); //只设置了最小值，也无法生成滑块

  // 4)通过step()方法来限制每次变化的最小值，也就是你增加或者减少，必须都是这个值的倍数
  // gui.add(controls, "positionX", -10, 10).step(1);    // 限制必须为整数
  // gui.add(controls, "positionY", -10, 10).step(0.1);  // 每次变化都是0.1的倍数
  // gui.add(controls, "positionZ", -10, 10).step(10);   // 每次变化都是10的倍数

  // 5)生成一个下拉框
  // 在gui.add()的第三个值传入一个对象或者数组，dat.GUI就能够自动匹配生成一个下拉框
  // gui.add(controls, "positionX", ["left", "middle", "right"]);  // 字符串类型的下拉框
  // gui.add(controls, "positionX", ["true", "false"]);  // 布尔值类型的下拉框
  // gui.add(controls, "positionY", { "left": -10, "middle": 0, "right": 10 });  // 数字类型的下拉框

  // 6)生成一个点击事件按钮
  // 如果controls的值为一个函数function，dat.GUI会自动生成一个可以点击的按钮，当按下时就会触发这个函数事件
  // controls = {
  //   positionX: function () { },
  //   positionY: function () { },
  //   positionZ: function () { }
  // };
  // gui.add(controls, "positionX");
  // gui.add(controls, "positionY");
  // gui.add(controls, "positionZ");

  // 7) 修改显示的名称:使用name()事件进行设置显示的名称
  // gui.add(controls, "positionX", -1, 1).name("x轴");
  // gui.add(controls, "positionX", -1, 1).name("y轴");
  // gui.add(controls, "positionX", -1, 1).name("Z轴");

  // 8) 颜色选择框
  // 实现颜色选择框首先需要值为一种正常的格式，比如css的颜色样式或者RGB格式
  // 然后再使用gui.addColor()的方法添加
  // controls = {
  //   positionX: '#cccccc',           // css样式
  //   positionY: [0, 255, 255],       // RGB格式
  //   positionZ: [0, 255, 255, 0.6]   // RGBA格式
  // };
  // gui.addColor(controls, "positionX").name("x轴");
  // gui.addColor(controls, "positionY").name("y轴");
  // gui.addColor(controls, "positionZ").name("z轴");

  // 9)监听事件回调
  // dat.GUI给我们提供了监听事件回调的方法onChange()，如果值变化就能够触发函数回调
  // 将需要修改的配置添加对象中，并监听变化回调
  // gui.add(controls, "positionX", -1, 1).onChange(updatePosition).name("x轴");
  // gui.add(controls, "positionY", -1, 1).onChange(updatePosition).name("y轴");
  // gui.add(controls, "positionZ", -1, 1).onChange(updatePosition).name("z轴");
  // 每次都修改对象里面的值以后，都会触发updatePosition回调 => 来更新模型的位置
  // function updatePosition() {
  //   mesh.position.set(controls.positionX, controls.positionY, controls.positionZ);
  // }

  // 创建分组
  // 使用gui.addFolder()方法来创建分组
  var first = gui.addFolder("第一个分组");
  first.add(controls, "positionX", -1, 1).onChange(updatePosition).name("x轴");

  var second = gui.addFolder("第二个分组");
  second.add(controls, "positionY", -1, 1).onChange(updatePosition).name("y轴");
  second.add(controls, "positionZ", -1, 1).onChange(updatePosition).name("y轴");

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





// 测试调用
test();

// 测试
function test() {
  // 判断一个对象是否是继承至THREE.Object3D 继承返回 true 否则返回false
  // scene,camera,geomerty,mesh => 继承
  // material,renderer,stats    => 不继承
  console.log(mesh instanceof THREE.Object3D);

  // 获取一个3d对象
  // console.log(scene.getObjectById(1)); //返回id值为1的3d对象 ???

  // 隐藏一个3d对象
  // mesh.visible = false; // 设置为false，模型将不会被渲染到场景内

  // 彻底删除一个3d对象
  // scene.remove(mesh);

  // 获取到所有的子类 => 每一个3d对象都有一个children属性，这是一个数组，里面包含所有添加的3d对象
  // console.log(scene.children); // Array

  // 获取3d对象下面所有的3d对象
  // .traverse ( callback : Function )
  // scene.traverse(function (child) {
  //   // 打印 scene及scene对象下所有的3d对象
  //   // console.log(child); 
  // })

  // 获取3d对象的父元素
  // console.log(mesh.parent); // scene
  // console.log(mesh.parent == scene); // true

  // 修改3d对象的位置，大小和转向:position、scale、rotation

  // 1.修改位置方式
  // 通过设置模型的position属性进行修改模型的当前位置，具体方法有以下几种：
  // 1）单独设置每个方向的属性
  // mesh.position.x = 3;   // 将模型的位置调整到x正轴距离原点为3的位置 
  // mesh.position.y += 5;  // 将模型的y轴位置以当前的位置向上移动5个单位
  // mesh.position.z -= 6;
  // 2）直接一次性设置所有的
  // mesh.position.set(3, 5, -6); //  //直接将模型的位置设置在x轴为3，y轴为5，z轴为-6的位置
  // 3）Three.js的模型的位置属性是一个THREE.Vector3（三维向量）的对象,可以直接重新赋值一个新的对象
  // mesh.position = new THREE.Vector3(3, 5, -6); // ???

  // 2.修改大小的方式
  // 1) 第一种方式是单独设置每个方向的缩放
  // mesh.scale.x = 2;     //  模型沿x轴放大一倍
  // mesh.scale.y = 0.5;   // 模型沿y轴缩小一倍
  // mesh.scale.z = 1;     //模型沿z轴保持不变
  // 2) 第二种是使用set方法
  // mesh.scale.set(2, 0.5, 1);
  // 3) 第三种方式，由于scale属性也是一个三维向量，我们可以通过赋值的方式重新修改
  // // mesh.scale = new THREE.Vector3(2, 2, 2); // ??

  // 3.修改模型的转向(弧度)
  // Math.PI 表示一个圆的周长与直径的比例，约为 3.14159
  // Math.PI=π≈3.14159
  // 1)第一种方式是单独设置每个轴的旋转
  // mesh.rotation.x = Math.PI; // 模型沿x旋转180度
  // mesh.rotation.y = Math.PI * 2;  // 模型沿y轴旋转360度，跟没旋转一样的效果
  // mesh.rotation.z = -Math.PI / 2;    // 模型沿z轴逆时针旋转90度
  // 2）第二种方式就是使用set方法重新赋值
  // mesh.rotation.set(Math.PI, 0, -Math.PI / 2); // 旋转效果和第一种显示的效果相同
  // 正常模型的旋转方式是按照XYZ依次旋转的,如果想先旋转其他轴，我们可以添加第四项修改：可能为：YZX，ZXY，XZY，YXZ'和 ZYX
  // mesh.rotation.set(Math.PI, 0, -Math.PI / 2, 'ZYX');
  // 3) 第三种方式，模型的rotation属性其实是一个欧拉角对象（THREE.Euler）,可以以通过重新赋值一个欧拉角对象来实现旋转调整
  // mesh.rotation = new THREE.Euler(Math.PI, 0, -Math.PI / 2, 'ZYX');
}