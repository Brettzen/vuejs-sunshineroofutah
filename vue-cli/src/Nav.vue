<template>
  <b-navbar toggleable='lg' type='dark' variant='dark' class='shadow' sticky id='nav'>
  <b-navbar-brand href='#top'><img class='logo' src='./assets/SunshineLogoLight.png'><span class='h1'>Sunshine Roofing Company</span></b-navbar-brand>
  <b-navbar-toggle target='nav-collapse'></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class='links'>
        <b-nav-item href="#about">About Us</b-nav-item>
        <b-nav-item href="#services">Products &amp; Services</b-nav-item>
        <b-nav-item href="#gallery">Gallery</b-nav-item>
        <b-nav-item href="#contact">Free Quote</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class='text-left'>
          <a class='text-light' href="tel:4357222539">Uintah Basin: (435) 722-2539</a><br>
          <a class='text-light' href="tel:4358817820">Bear Lake: (435) 881-7820</a><br>
          <a class='text-light' href="mailto:sunroof@ubtanet.com">sunroof@ubtanet.com</a><br>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
#nav {
  font-family: 'Bebas Kai', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1.5em;
}

.logo {
  width: 250px;
}

html, body {
  font-family: "Lato", "Arial", sans-serif;
}

h1 {
  font-family: "Bebas Kai";
  letter-spacing: 1px;
}

h1, h2, h3, p {
  font-weight: normal;
  line-height: 2em;
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
