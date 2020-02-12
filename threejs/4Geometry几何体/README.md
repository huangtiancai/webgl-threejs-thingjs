前面代码案例是立方体 => 更多的几何体形状

THree.js内置几何体种类：立方体、三棱锥、球、八面体、十二面体、二十面体等等

模型 = 几何体Geometry + 材质material

1. Geometry和BufferGeometry
BufferGeometry - 性能高，一般不需要额外操作
Geometry       -  易于阅读和编辑，但效率低于BufferGeometry使用的类型化数组

BufferGeometry - 中大型的项目
Geometry       - 小项目

这里使用作为简单的Geometry来实现案例：
Geometry：是对 BufferGeometry 的用户有好替代。Geometry 利用 Vector3 或 Color 存储了几何体的相关 attributes（如顶点位置，面信息，颜色等）比起 BufferGeometry 更容易读写，但是运行效率不如有类型的队列

2. Geometry和BufferGeometry互转
BufferGeometry => Geometry
```javascript
// 实例化一个Geometry对象
Geometry geo = new THREE.Geometry();
// 调用对象的fromBufferGeometry方法，并将需要转换的bufferGeometry传入
geo.fromBufferGeometry(bufferGeometry); // => geo则为转换成的Geometry
```

Geometry => BufferGeometry
```javascript
// 实例化一个BufferGeometry对象
BufferGeometry buf = new THREE.BufferGeometry();
// 调用对象的fromGeometry方法，并将需要转换的geometry传入
buf.fromGeometry(geometry);    // buf则为转换成的的BufferGeometry
```

Three.js内置几何体
1. BoxGeometry 立方体
构造函数：
BoxGeometry(
   width : 浮点类型, height : 浮点类型, depth : 浮点类型, 
   widthSegments : 整数类型, heightSegments : 整数类型, depthSegment: 整数类型)
