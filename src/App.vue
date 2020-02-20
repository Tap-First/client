<template>
  <div id="app">
    <div class="container-fluidS">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Front from "./views/Front"
export default {
    components: {
      Front
    }
}
</script>

<style lang="scss">
@import './assets/scss/style.scss';
#app {
  background-image: url("./assets/images/bg-home.jpg");
  background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
  height: 97.5vh;
}

</style>
