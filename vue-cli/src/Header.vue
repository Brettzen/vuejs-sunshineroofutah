<template>
  <div class="jumbotron jumbotron-fluid" id="header ">
    <div id="carouselExampleFade" class="carousel slide carousel-fade shadow" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src='./assets/ArchShingles.jpg' class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src='./assets/AsphaltShingles4.jpg' class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src='./assets/CedarShakes1.jpg' class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src='./assets/HomePage.jpg' class="d-block w-100" alt="...">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
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
#header {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.carousel {

    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    overflow: hidden;
}

.jumbotron {
  height: 600px;
  padding: 0;
  margin-bottom:0;
}
</style>
