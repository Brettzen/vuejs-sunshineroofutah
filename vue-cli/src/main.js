import Vue from 'vue'
import Header from './Header.vue'
import Nav from './Nav.vue'
import About from './About.vue'
import Services from './Services.vue'
import Gallery from './Gallery.vue'
import Contact from './Contact.vue'
import Footer from './Footer.vue'

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
