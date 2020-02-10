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

3. THREE.Object3D
Three.js将每个能够直接`添加到场景内的对象`都继承至一个`基类`-`THREE.Object3D` => 将继承至这个基类的对象称为`3d对象`

判断一个对象是否继承THREE.Object3D
```
判断一个对象是否是继承至THREE.Object3D 继承返回 true 否则返回false
scene,camera,geomerty,mesh => 继承
material,renderer,stats    => 不继承


```

向场景内添加一个3d对象
```
scene.add(mesh);  // 将网格添加到场景
```

也可以将一个3d对象添加到另一个3d对象里面
```
parent.add(child);
```
