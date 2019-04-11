<template>
  <div class='shadow' id='gallery'>
    <h1>Photo Gallery</h1>
    <div class='container card-columns'>
      <div class="card shadow-sm">
        <img src="./assets/AluminumShingles.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/AsphaltShingles1.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/AsphaltShingles2.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/AsphaltShingles3.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/AsphaltShingles4.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/CedarShakes1.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/CedarShakes2.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/Shakes.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/OilCedarShakes.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/HeatCable.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/EnclosedHeatCable.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/Metal1.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/Metal2.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/Metal2.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/Metal3.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/Metal4.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/Metal5.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/Schafer1.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/ShinglesAndMetal1.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/ShinglesAndMetal2.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/RoofCoating1.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/RoofCoating2.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/Single-Ply1.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/Single-Ply2.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/SteelShakes.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/Tile.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/Torch-Down.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/Torch-DownAndTrailerHouse.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/Membrane2.jpg" class="card-img-top" alt="...">
      </div>
      <div class="card shadow-sm">
        <img src="./assets/ShinglesAndTorch-Down.jpg" class="card-img-top" alt="...">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins/_breakpoints";
#gallery {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 50px 100px 250px;
  background-color: rgb(229,232,229);
}

.card-columns {
  column-count: 4;
}

@media screen and (max-width: 576px) {
  .card-columns {
    column-count: 1;
  }
}

@media screen and (max-width: 768px) {
  .card-columns {
    column-count: 2;
  }
}

@media screen and (max-width: 992px) {
  .card-columns {
    column-count: 3;
  }
}
</style>
