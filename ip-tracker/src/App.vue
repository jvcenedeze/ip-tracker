<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <Home />
        </div>
      </div>
      <div class="attribution">
        Challenge by <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >Frontend Mentor</a>.
        Coded by <a
          href="https://github.com/poiozex"
          target="_blank"
        >João Vitor Cenedeze</a>.
      </div>
    </div>
  </div>
</template>

<script>

import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");

#app {
  font-family: "Rubik", sans-serif;
  .attribution {
    font-size: 11px;
    text-align: center;
  }
  .attribution a {
    color: hsl(228, 45%, 44%);
  }
}
</style>

