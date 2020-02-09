/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveBlending, AlphaFormat, AlwaysDepth, AmbientLight, AmbientLightProbe, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, AxisHelper, BackSide, BasicDepthPacking, BasicShadowMap, BinaryTextureLoader, Bone, BooleanKeyframeTrack, BoundingBoxHelper, Box2, Box3, Box3Helper, BoxBufferGeometry, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasRenderer, CanvasTexture, CatmullRomCurve3, CineonToneMapping, CircleBufferGeometry, CircleGeometry, ClampToEdgeWrapping, Clock, ClosedSplineCurve3, Color, ColorKeyframeTrack, CompressedTexture, CompressedTextureLoader, ConeBufferGeometry, ConeGeometry, CubeCamera, CubeGeometry, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubeUVRefractionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CylinderBufferGeometry, CylinderGeometry, Cylindrical, DataTexture, DataTexture2DArray, DataTexture3D, DataTextureLoader, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DirectionalLight, DirectionalLightHelper, DirectionalLightShadow, DiscreteInterpolant, DodecahedronBufferGeometry, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicBufferAttribute, EdgesGeometry, EdgesHelper, EllipseCurve, EqualDepth, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExtrudeBufferGeometry, ExtrudeGeometry, Face3, Face4, FaceColors, FaceNormalsHelper, FileLoader, FlatShading, Float32Attribute, Float32BufferAttribute, Float64Attribute, Float64BufferAttribute, FloatType, Fog, FogExp2, Font, FontLoader, FrontFaceDirectionCCW, FrontFaceDirectionCW, FrontSide, Frustum, GammaEncoding, Geometry, GeometryUtils, GreaterDepth, GreaterEqualDepth, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, HemisphereLightProbe, IcosahedronBufferGeometry, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, ImmediateRenderObject, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, Int16Attribute, Int16BufferAttribute, Int32Attribute, Int32BufferAttribute, Int8Attribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, JSONLoader, KeyframeTrack, LOD, LatheBufferGeometry, LatheGeometry, Layers, LensFlare, LessDepth, LessEqualDepth, Light, LightProbe, LightProbeHelper, LightShadow, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LinePieces, LineSegments, LineStrip, LinearEncoding, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearToneMapping, Loader, LoaderUtils, LoadingManager, LogLuvEncoding, LoopOnce, LoopPingPong, LoopRepeat, LuminanceAlphaFormat, LuminanceFormat, MOUSE, Material, MaterialLoader, Math, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshFaceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiMaterial, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NeverDepth, NoBlending, NoColors, NoToneMapping, NormalBlending, NotEqualDepth, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronBufferGeometry, OctahedronGeometry, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, ParametricBufferGeometry, ParametricGeometry, Particle, ParticleBasicMaterial, ParticleSystem, ParticleSystemMaterial, Path, PerspectiveCamera, Plane, PlaneBufferGeometry, PlaneGeometry, PlaneHelper, PointCloud, PointCloudMaterial, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronBufferGeometry, PolyhedronGeometry, PositionalAudio, PositionalAudioHelper, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, REVISION, RGBADepthPacking, RGBAFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGBDEncoding, RGBEEncoding, RGBEFormat, RGBFormat, RGBM16Encoding, RGBM7Encoding, RGB_ETC1_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RectAreaLightHelper, RedFormat, ReinhardToneMapping, RepeatWrapping, ReverseSubtractEquation, RingBufferGeometry, RingGeometry, Scene, SceneUtils, ShaderChunk, ShaderLib, ShaderMaterial, ShadowMaterial, Shape, ShapeBufferGeometry, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, SmoothShading, Sphere, SphereBufferGeometry, SphereGeometry, Spherical, SphericalHarmonics3, SphericalReflectionMapping, Spline, SplineCurve, SplineCurve3, SpotLight, SpotLightHelper, SpotLightShadow, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StereoCamera, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TangentSpaceNormalMap, TetrahedronBufferGeometry, TetrahedronGeometry, TextBufferGeometry, TextGeometry, Texture, TextureLoader, TorusBufferGeometry, TorusGeometry, TorusKnotBufferGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeBufferGeometry, TubeGeometry, UVMapping, Uint16Attribute, Uint16BufferAttribute, Uint32Attribute, Uint32BufferAttribute, Uint8Attribute, Uint8BufferAttribute, Uint8ClampedAttribute, Uint8ClampedBufferAttribute, Uncharted2ToneMapping, Uniform, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedInt248Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedShortType, Vector2, Vector3, Vector4, VectorKeyframeTrack, Vertex, VertexColors, VertexNormalsHelper, VideoTexture, WebGLMultisampleRenderTarget, WebGLRenderTarget, WebGLRenderTargetCube, WebGLRenderer, WebGLUtils, WireframeGeometry, WireframeHelper, WrapAroundEnding, XHRLoader, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, sRGBEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/index-entry.js":
/*!****************************!*\
  !*** ./src/index-entry.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n// 浏览器不能识别ES6Module/CommonJS模块导入导出规范的代码 => 必须编译\r\n// ES6Module规范（必须在最开始引入）引入\r\n\r\n\r\n// CommonJS规范（NODE）引入\r\n// var THREE = require('three');\r\n\r\n\r\n// 场景scene\r\nvar scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\r\n\r\n// 相机\r\n// three.js里有几种不同的相机,这里使用的是PerspectiveCamera（透视摄像机）  Perspective - 透视\r\n\r\n// 第一个参数是视野角度（FOV）\r\n// 第二个参数是长宽比（aspect ratio）\r\n// 第三个参数是近截面（near）\r\n// 第四个参数是远截面（far）\r\nvar camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](75, window.innerWidth / window.innerHeight, 0.1, 1000);\r\n\r\n// 渲染器\r\n// Three.js同时提供了其他几种渲染器,当用户所使用的浏览器过于老旧，或者由于其他原因不支持WebGL时，可以使用这几种渲染器进行降级\r\nvar renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]();\r\n\r\n\r\n// 设置渲染器的尺寸\r\n// 渲染器渲染出的场景填充满我们的应用程序 => 因此，我们可以将渲染器宽高设置为浏览器窗口宽高\r\nrenderer.setSize(window.innerWidth, window.innerHeight);\r\n\r\n// 对于性能比较敏感的应用程序来说，你可以使用setSize传入一个较小的值，例如window.innerWidth/2和window.innerHeight/2，这将使得应用程序在渲染时，以一半的长宽尺寸渲染场景\r\n// renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);\r\n\r\n// 保持你的应用程序的尺寸，但是以较低的分辨率来渲染，你可以在调用setSize时，将updateStyle（第三个参数）设为false\r\n// 前提<canvas> 标签现在已经具有了100%的宽和高\r\n// 下面的渲染器将使得你的应用程序以一半的分辨率来进行渲染。\r\n// renderer.setSize(window.innerWidth / 2, window.innerHeight / 2, false);\r\n\r\n\r\n// 将renderer（渲染器）的dom元素（renderer.domElement）添加到我们的HTML文档中\r\n// 这就是渲染器用来显示场景给我们看的<canvas>元素\r\ndocument.body.appendChild(renderer.domElement);\r\n\r\n// 创建一个立方体\r\n// 创建一个立方体,需要一个BoxGeometry（立方体）对象 => 这个对象包含了一个立方体中所有的顶点（vertices）和面（faces）\r\n// Geometry:几何\r\nvar geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"BoxGeometry\"](1, 1, 1);\r\n\r\n// 材质 => 颜色\r\n// Mesh:网格; Material:材料、材质\r\n// 这里设置绿色\r\nvar material = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshBasicMaterial\"]({ color: 0x00ff00 });\r\n\r\n// Mesh（网格）\r\n// 网格包含一个几何体以及作用在此几何体上的材质\r\nvar cube = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geometry, material);\r\n\r\n// 将网格对象放入到我们的场景中，并让它在场景中自由移动\r\nscene.add(cube);\r\n// 默认情况下，当我们调用scene.add()的时候，物体将会被添加到(0,0,0)坐标\r\n// 但将使得摄像机和立方体彼此在一起，为了防止这种情况的发生，只需要将摄像机稍微向外移动一些即可\r\ncamera.position.z = 3;\r\n\r\n// 2.渲染场景\r\n// 渲染循环”（render loop）或者“动画循环”（animate loop）\r\n// 这里创建了一个使渲染器能够在每次屏幕刷新时对场景进行绘制的循环（在大多数屏幕上，刷新率一般是60次/秒）\r\nfunction animate() {\r\n  // setInterval 也可以实现刷新，但是要指定时间\r\n  // requestAnimationFrame 优点：\r\n  //   1.不需要指定时间，默认60次 / 秒执行一次回调函数\r\n  //   2.当用户切换到其它的标签页时，它会暂停，因此不会浪费用户宝贵的处理器资源，也不会损耗电池的使用寿命\r\n  requestAnimationFrame(animate);\r\n  // 使立方体动起来\r\n  // 这段代码每帧都会执行（正常情况下是60次/秒）\r\n  cube.rotation.x += 0.01;\r\n  cube.rotation.y += 0.01;\r\n  // 使用渲染器渲染\r\n  renderer.render(scene, camera);\r\n}\r\n// 调用\r\nanimate();\r\n\r\n\r\n// 1.位置随浏览器窗口变化而变化\r\n// 2.不随滚轮滚动放大或缩小\r\n// 将函数赋予window.onresize\r\nwindow.onresize = function () {\r\n  // 设置渲染器宽高\r\n  renderer.setSize(window.innerWidth, window.innerHeight);\r\n  // 设置相机的宽高比\r\n  camera.aspect = window.innerWidth / window.innerHeight;\r\n  // 重新计算投影矩阵\r\n  camera.updateProjectionMatrix();\r\n}\r\n\r\n// 注意：\r\n// 1.渲染器最后渲染出来的是<canvas>元素\r\n// 2.每次操作都要渲染一次（每次场景、相机改变或者想要移动都要重新渲染）\r\n//   将执行移动的代码加入“动画循环”循环函数中 => 每次执行“移动代码” 都会重新渲染 => 避免重复的代码\r\n// 3.本机电脑刷新频率（Hz） 60Hz 60次/秒 => 1/60秒刷新一次\r\n// 帧率fps  由显卡的性能来决定\r\n// 刷新率Hz 由显示器的物理条件\n\n//# sourceURL=webpack:///./src/index-entry.js?");

/***/ })

/******/ });