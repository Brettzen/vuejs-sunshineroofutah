<template>
  <div class="footer bg-dark text-light" id="footer">
    <div class='row'>
      <div class="col-md-4 border-right">
          <h3>About Us</h3>
          <img class='bbb' src='./assets/bbb-logo.png'>
          <p class="copyright">&copy; 1982-2018. All Rights Reserved.</p>
      </div>
      <div class="col-md-4 border-right">
          <h3>Site Map</h3>
          <ul class='list-group-flush'>
            <li class='list-group-item bg-dark'><a class='text-light' href="#about">About Us</a></li>
            <li class='list-group-item bg-dark'><a class='text-light' href="#services">Products &amp; Services</a></li>
            <li class='list-group-item bg-dark'><a class='text-light' href="#gallery">Gallery</a></li>
            <li class='list-group-item bg-dark'><a class='text-light' href="#contact">Free Quote</a></li>
          </ul>
      </div>
      <div class="col-md-4">
          <h3>Contact Us</h3>
          <p>Sunshine Roofing Company<br>
          750 West 1000 South<br>
          Roosevelt, UT 84066</p>
          <p><a class='text-light' href="tel:4357222539"><i class="fas fa-phone" style="font-size:1.25em;"></i> (435) 722-2539 (Uintah Basin)</a><br>
          <a class='text-light' href="tel:4358817820"><i class="fas fa-phone" style="font-size:1.25em;"></i> (435) 881-7820 (Bear Lake)</a><br>
          <span class="footer-email"><a class='text-light' href="mailto:sunroof@ubtanet.com"><i class="fas fa-envelope-open-text" style="font-size:1.25em;"></i> sunroof@ubtanet.com</a></span></p>
          <p class='money'>We accept:<br>
          <i class="fas fa-money-bill-wave"></i> <i class="fas fa-money-check-alt"></i> <i class="fab fa-cc-visa"></i> <i class="fab fa-cc-mastercard"></i> <i class="fab fa-cc-amex"></i> <i class="fab fa-cc-discover"></i> </i></p>
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
#footer {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 50px 100px;
  font-size: 1.25em;

  .list-group-flush {
    border: none;

    .list-group-item {
      border:none;
    }

  }
}

.bbb {
  margin-left: -36px;
}
.money i {
  font-size: 2em;
}


a.text-light2 {
  color: rgba(255,255,255,.5);
}
</style>
