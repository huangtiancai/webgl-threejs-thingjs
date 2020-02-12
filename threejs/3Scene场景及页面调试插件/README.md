使用dat.GUI实现页面调试
如需要调整场景内模型位置或者大小可以常用的插件dat.GUI

使用插件之前学习一些必要的知识点
1. 场景 - 放置项目内容的容器
   - 可以拥有多个场景进行切换展示
   - 可以在场景内放置你的模型，灯光和照相机
   - 可以通过调整场景的位置，让场景内的所有内容都一起跟着调整位置
   ...

2. 场景的结构
- javascript => 操作dom => dom的结构都是树形结构 => Three.js遵循这个的理念 => 将所有可以添加到场景内的结构梳理成了一种树形的结构，方便我们能够更好的理解Three.js

- 场景scene类比如一个body => body内可以添加dom对象
                         => scene内也可以添加它的3d对象 => 嵌套

在Three.js中，为了方便操作，将所有`3d对象`共同的内容抽象成了一个`基类`，就是`THREE.Object3D`
...


3. 使用dat.GUI插件实现页面调试
目前共使用两款插件：
- stats
- dat.gui

将插件的源码引入到页面当中，cdn 或 直接引入js
```javascript
<script src="../build/three.js"></script>
<script src="../build/stats.min.js"></script>
<script src="../build/dat.gui.min.js"></script>
```

在浏览器中使用ES module
```javascript
<script type="module">
   import * as THREE from '../build/three.module.js';
   import Stats from '../build/stats.module.js';
   import { GUI } from '../build/dat.gui.module.js';

   // JS代码

</script>
```

stats、 dat.gui两款插件具体使用 => [index](./index.html)
