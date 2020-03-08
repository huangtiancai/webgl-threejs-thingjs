<template>
  <div id="geometry" />
</template>

<script>
import * as THREE from "three";


export default {
  name: "Geometry",
  data() {
    return {
      scene: null,
      camera: null,
      geomerty: null,
      material: null,
      mesh: null,
      renderer: null,
      stats: null,
      controls: null,
      gui: null
    };
  },
  mounted() {
    this.init();
    this.animate();
  },
  methods: {
    init: function () {
      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.set(0, 0, 3);

      this.geomerty = new THREE.BoxGeometry(1, 1, 1);
      this.material = new THREE.MeshNormalMaterial();
      this.mesh = new THREE.Mesh(this.geomerty, this.material);
      this.scene.add(this.mesh);

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);

      const container = document.createElement('div');
      container.appendChild(this.renderer.domElement);

      document.getElementById('geometry').appendChild(container);

      window.addEventListener("resize", this.onWindowResize, false);
    },
    animate: function () {
      requestAnimationFrame(this.animate);
      // 使立方体动起来
      this.mesh.rotation.x += 0.005; // 每帧网格模型的沿x轴旋转0.01弧度
      this.mesh.rotation.y += 0.005; // 每帧网格模型的沿y轴旋转0.02弧度
      // 渲染器渲染:在循环调用的函数中，每一帧我们都让页面重新渲染相机拍摄下来的内容
      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize: function () {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }
};
</script>

<style lang="scss" scoped>
canvas {
  width: auto;
  height: auto;
}
</style>
