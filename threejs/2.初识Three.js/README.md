创建第一个Three App

1. 初始化函数
  - init()
    + Three.js 三大件：场景、相机、渲染器
      + 构建场景:THREE.Scene();
      + 创建相机
        + THREE.PerspectiveCamera
        + 设置相机的位置 => WebGL的坐标系
      + 创建渲染器
        + THREE.WebGLRenderer <= 基于WebGL渲染的渲染器
        + setSize => 设置要显示的窗口大小
        + 渲染器渲染界面生成的内容在画布上显示 => renderer.domElement(在实例化渲染器时生成的一个canvas画布) => 添加到dom      
      + 创建模型

2. 运行动画
  - animate()
3. 调用
  - init();
  - animate();

4. Three.js的性能检测插件
Three.js里面，遇到的最多的问题就是性能问题 => 需要时刻检测当前的Three.js的性能 => Three.js常使用的一款插件叫stats
```
stats = new Stats();
document.body.appendChild(stats.dom);
stats.update();
```

在场景当中，我们能够看到左上角会有一个性能检测的小框
前面的数值代表当前`每秒的渲染帧率`，后面的括号内的值是当前的场景渲染的`帧率范围`
