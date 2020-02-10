什么是WEBGL？
WebGL (Web图形库) 是一种JavaScript API，用于在任何兼容的Web浏览器中呈现交互式3D和2D图形，而无需使用插件。

什么是Three.js？
1. Three.js是一款webGL框架，由于其易用性被广泛应用。Three.js在WebGL的api接口基础上，又进行的一层封装
2. 它是由居住在西班牙巴塞罗那的程序员Ricardo Cabbello Miguel开发的
3. Three.js以简单、直观的方式封装了3D图形编程中常用的对象
4. Three.js在开发中使用了很多图形引擎的高级技巧，极大地提高了性能
5. 由于内置了很多常用对象和极易上手的工具，Three.js的功能也非常强大
6. Three.js还是完全开源的

WEBGL和Three.js的关系
1. WebGL原生的api是一种非常低级的接口，而且还需要一些数学和图形学的相关技术 => 入门难
2. Three.js将入门的门槛降低了整整的一大截，对WebGL进行封装，简化我们创建三维动画场景的过程

功能概述：
1. Three.js掩盖了3D渲染的细节：Three.js将WebGL原生API的细节抽象化，将3D场景拆解为网格、材质和光源(即它内置了图形编程常用的一些对象种类)。
2. 面向对象：开发者可以使用上层的JavaScript对象，而不是仅仅调用JavaScript函数。
3. 功能非常丰富：Three.js除了封装了WebGL原始API之外，Three.js还包含了许多实用的内置对象，可以方便地应用于游戏开发、动画制作、幻灯片制作、髙分辨率模型和一些特殊的视觉效果制作。
4. 速度很快：Three.js采用了3D图形最佳实践来保证在不失可用性的前提下，保持极高的性能。
5. 支持交互：WebGL本身并不提供拾取（picking)功能（即是否知道鼠标正处于某个物体上）。而Three.js则固化了拾取支持，这就使得你可以轻松为你的应用添加交互功能。
6. 包含数学库：Three.js拥有一个强大易用的数学库，你可以在其中进行矩阵、投影和矢量运算。
7. 内置文件格式支持：你可以使用流行的3D建模软件导出文本格式的文件，然后使用Three.js加载；也可以使用Three.js自己的JSON格式或二进制格式。
8. 扩展性很强：为Three.js添加新的特性或进行自定义优化是很容易的事情。如果你需要某个特殊的数据结构，那么只需要封装到Three.js即可。
9. 支持HTML5 canvas：Three.js不但支持WebGL，而且还支持使用Canvas2D、Css3D和SVG进行渲染。在未兼容WebGL的环境中可以回退到其它的解决方案

Three.js与其他库的对比:
随着WebGL的迅速发展，相关的WebGL库也丰富起来，接下来列出几个比较火的WebGL库：
- Babylon.js
- PlayCanvas
- Cesium

总结:
- Three.js在其库的扩展性，易用性以及功能方面有很好的优势
- 学习Three.js入门3D开发不但门槛低，而且学习曲线不会太陡，即使以后转向WebGL原生开发，也能通过Three.js学习到很多有用的知识
- 微信小游戏跳一跳也是在Three.js的基础上开发出来的。所以，Three.js是我们必须要学的WebGL框架

入门前准备
1. 浏览器兼容
Three.js可以使用WebGL在所有现代浏览器上渲染场景。对于旧版浏览器，尤其是Internet Explorer 10及更低版本，您可能需要回退到其他渲染器（CSS2DRenderer，CSS3DRenderer，SVGRenderer，CanvasRenderer）

2. 支持的浏览器版本
Google Chrome 9+，Firefox 4+，Opera 15+，Safari 5.1+，Internet Explorer 11和Microsoft Edge


使用three.js创建一个立方体的案例
首先引入了three.js的库文件，就和引入jq一样
1. 创建场景
2. 创建相机，并设置视野，显示的宽高比，近裁剪面，远裁剪面
3. 创建渲染器，并设置属性，放置到dom中
4. 创建一个立方体模型，并放入到场景
5. 设置相机的位置
6. 设置一个动画函数，并使用渲染器把场景和相机渲染出来，每秒60帧，显示出来，就变成了动画

通过模块来引入（Import via modules）
1. 通过npm来安装
Three.js目前已经作为一个npm模块来进行了发布，详情请参阅：npm(https://www.npmjs.com/package/three)。这意味着你只需运行"npm install three"就可以使你的项目包含three.js库。
2. ES6Module规范（必须在最开始引入）引入 或  CommonJS规范（NODE）引入
3. webpack编译打包，再引入

中文文档：
http://wjceo.com/three.js/docs/#manual/zh/introduction/Creating-a-scene
gitee参考：
https://gitee.com/break_egg/Three.js-VideoTutorial
博客参考：
https://www.wjceo.com/
https://blog.csdn.net/qq_30100043/article/details/74202841
https://blog.csdn.net/qq_30100043/article/details/82014971
http://www.yanhuangxueyuan.com/