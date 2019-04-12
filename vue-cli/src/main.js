import Vue from 'vue'
import Header from './Header.vue'
import Nav from './Nav.vue'
import About from './About.vue'
import Services from './Services.vue'
import Gallery from './Gallery.vue'
import Contact from './Contact.vue'
import Footer from './Footer.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  el: '#header',
  render: h => h(Header)
})

new Vue({
  el: '#nav',
  render: h => h(Nav)
})

new Vue({
  el: '#about',
  render: h => h(About)
})

new Vue({
  el: '#services',
  render: h => h(Services)
})

new Vue({
  el: '#gallery',
  render: h => h(Gallery)
})

new Vue({
  el: '#contact',
  render: h => h(Contact)
})

new Vue({
  el: '#footer',
  render: h => h(Footer)
})

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#nav a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 200
      }, 500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
          // window.location.hash = hash;
      });
    } // End if
  });
});
