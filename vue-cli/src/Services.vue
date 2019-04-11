<template>
  <div class='shadow' id='services'>
    <h1>Products &amp; Services</h1>
    <div class='container'>
      <div class='row d-flex justify-content-between'>
        <div class='col-md-4 flex-item'>
          <h3>Roofing Products</h3>
          <ul class='list-group-flush'>
            <li class='list-group-item'>Asphalt Shingles</li>
            <li class='list-group-item'>Metal Roofing</li>
            <li class='list-group-item'>Asphalt &amp; Metal</li>
            <li class='list-group-item'>Cedar Shakes &amp; Shingles</li>
            <li class='list-group-item'>Aluminum Shingles &amp; Shakes</li>
            <li class='list-group-item'>Steel Shakes</li>
            <li class='list-group-item'>Tile</li>
            <li class='list-group-item'>Single-Ply Membrane (for low-pitched roofs)</li>
            <li class='list-group-item'>Torch-Down Membrane (for low-pitched roofs)</li>
            <li class='list-group-item'>Rubberized Roof Coating</li>
          </ul>
        </div>
        <div class='col-md-4 flex-item'>
          <h3>Roofing Services</h3>
          <ul class='list-group-flush'>
            <li class='list-group-item'>New Construction</li>
            <li class='list-group-item'>Re-Roofs</li>
            <li class='list-group-item'>Repairs</li>
            <li class='list-group-item'>Residential</li>
            <li class='list-group-item'>Commercial &amp; Industrial</li>
            <li class='list-group-item'>Mobile Homes &amp; Trailers</li>
            <li class='list-group-item'>Installing Heat Cables</li>
            <li class='list-group-item'>Installing Enclosed Heat Cables</li>
            <li class='list-group-item'>Installing Roof Vents</li>
            <li class='list-group-item'>Oil Cedar Shakes &amp; Shingles</li>
            <li class='list-group-item'>Roof Inspections</li>
            <li class='list-group-item'>Roof Snow &amp; Ice Removal</li>
          </ul>
        </div>
      </div>
    </div>
    <div class='container col-lg-12 col-md-12'>
      <h3>Manufacturers</h3>
      <div class='manufacturers'>
        <div class='row d-flex flex-lg-nowrap justify-content-center'>
          <div class='flex-item img-thumbnail'>
            <a href='https://www.classicmetalroofingsystems.com/' target='_blank'><img src="./assets/ClassicLogo.jpg" alt="Classic Metal Roofing Systems"></a>
          </div>
    			<div class="flex-item img-thumbnail">
            <a href="http://www.ascbp.com/" target="_blank"><img src="./assets/ASC.jpg" alt="ASC"></a>
          </div>
          <div class="flex-item img-thumbnail">
            <a href="http://www.tamko.com/ResidentialRoofing/TAMKOComplete" target="_blank"><img src="./assets/tamko.png" alt="TAMKO"></a>
          </div>
          <div class="flex-item img-thumbnail">
            <a href="http://www.gaf.com" target="_blank"><img src="./assets/GAF.jpg" alt="GAF"></a></li>
          </div>
          <div class="flex-item img-thumbnail">
            <a href="http://www.abcmetalroofing.com/" target="_blank"><img src="./assets/ABC.jpg" alt="American Building Components"></a>
          </div>
        </div>
        <div class='row d-flex flex-lg-nowrap justify-content-center'>
          <div class="flex-item img-thumbnail">
            <a href="http://www.bartile.com" target="_blank"><img src="./assets/Bartile.gif" alt="Bartile"></a>
          </div>
          <div class="flex-item img-thumbnail">
            <a href="http://www.versico.com" target="_blank"><img src="./assets/VersicoLogo.jpg"></a>
          </div>
          <div class="flex-item img-thumbnail">
            <a href="http://www.toppsproducts.com" target="_blank"><img src="./assets/ToppsLogo.jpg"></a>
          </div>
          <div class="flex-item img-thumbnail">
            <a href="http://www.bylinusa.com" target="_blank"><img src="./assets/BylinPentairLogo.jpg"></a>
          </div>
          <div class="flex-item img-thumbnail">
            <a href="http://www.aluminumlockroofing.com/" target="_blank"><img src="./assets/AluminumLockLogo.png" alt="AluminumLock Roofing"></a>
          </div>
        </div>
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
#services {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 50px 100px 250px;
}

.manufacturers {
  .img-thumbnail {
    height: 160px; /*can be anything*/
    width: 160px; /*can be anything*/
    position: relative;
    margin: 10px;
  }

  img {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
  }
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
