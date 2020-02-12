原生ES-Module在浏览器中的尝试
使用方式：
首先在使用上，唯一的区别就是需要在script标签上添加一个type="module"的属性来表示这个文件是作为module的方式来运行的。
```javascript
<script type="module">
    import message from './message.js';
    console.log(message);
</script>
```

message.js
```javascript
export default 'hello';
```

注意：
1. 浏览器原生提供的，在使用方法上与webpack的版本肯定还是会有一些区别的。(至少一个是运行时解析的、一个是本地编译)
2. 有效的module路径定义
- 因为是在浏览器端的实现，不会像在node中，有全局module一说（全局对象都在window里了）
- from 'XXX'这个路径的定义会与之前你所熟悉的稍微有些出入
```javascript
// 被支持的几种路径写法
import module from 'http://XXX/module.js'
import module from '/XXX/module.js'
import module from './XXX/module.js'
import module from '../XXX/module.js'
// 不被支持的写法
import module from 'XXX'
import module from 'XXX/module.js'
```
- 在webpack打包的文件中，引用全局包是通过import module from 'XXX'来实现的 => 这个实际是一个简写，webpack会根据这个路径去node_modules中找到对应的module并引入进来
- 原生支持的module是不存在node_modules一说的
所以，在使用原生module的时候一定要切记，from后边的路径一定要是一个有效的URL，以及一定不能省略文件后缀（是的，即使是远端文件也是可以使用的，而不像webpack需要将本地文件打包到一起）

3. THREE.js中的模块和插件引入
```javascript
import * as THREE from '../build/three.module.js';
import Stats from '../build/stats.module.js';
import { GUI } from '../build/dat.gui.module.js';
```
下面的项目均以这种模式开发


参考：
https://www.cnblogs.com/jiasm/p/9160691.html
https://zhuanlan.zhihu.com/p/39641701