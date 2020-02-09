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

