<template>
  <div id="indexLizi" />
</template>

<script>
import * as THREE from "three";

export default {
  name: "Spacewaves",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      star: null,
      stars: null,
      starGeo: null
    };
  },
  mounted() {
    this.init();
    this.animate();
  },
  methods: {
    init: function () {
      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
      this.camera.position.z = 1;
      this.camera.rotation.x = Math.PI / 2;

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);

      // document.getElementById('indexLizi').appendChild(this.renderer.domElement);

      const container = document.createElement('div');
      container.appendChild(this.renderer.domElement);
      document.getElementById('indexLizi').appendChild(container)

      this.starGeo = new THREE.Geometry();
      for (let i = 0; i < 6000; i++) {
        this.star = new THREE.Vector3(
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300
        );
        this.star.velocity = 0;
        this.star.acceleration = 0.01;
        this.starGeo.vertices.push(this.star);
      }

      let sprite = new THREE.TextureLoader().load(require('@/assets/img/star.png'));
      let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite
      });

      this.stars = new THREE.Points(this.starGeo, starMaterial);
      this.scene.add(this.stars);

      window.addEventListener("resize", this.onWindowResize, false);
    },
    animate: function () {
      this.starGeo.vertices.forEach(p => {
        p.velocity += p.acceleration
        p.y -= p.velocity;

        if (p.y < -200) {
          p.y = 200;
          p.velocity = 0;
        }
      });
      this.starGeo.verticesNeedUpdate = true;
      this.stars.rotation.y += 0.002;

      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.animate);
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
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  /* background: black; */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
