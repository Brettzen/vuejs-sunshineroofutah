<template>
  <div class='shadow' id='contact'>
    <div class='container'>
      <h1>Contact Us for a Free Quote</h1>
      <form class='border bg-light shadow'>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Your name" required>
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="text" class="form-control" id="email" placeholder="Your email address" required>
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="text" class="form-control" id="phone" placeholder="Your phone number">
        </div>
        <div class="form-group">
          <label for="phone">Message</label>
          <textarea class="form-control" id="message" rows='10' placeholder="Please describe the work you are interested in receiving a quote on." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
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
#contact {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 50px 100px 250px;
  background: rgb(250,250,210);

  form {
    padding: 50px;
    text-align: left;
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
