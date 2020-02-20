<template>
  <div id="app">
<<<<<<< HEAD
    <div class="container-fluidS">
      <router-view/>
=======
    <router-view/>
    <div class="container-fluid">

     <front />
>>>>>>> 0445f0a9050e957f1546c6e52a793fbf01025766
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
<<<<<<< HEAD
  background-image: url("./assets/images/bg-home.jpg");
  background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
  height: 97.5vh;
=======
  background-color: cadetblue;
  height: 100vh;
>>>>>>> 0445f0a9050e957f1546c6e52a793fbf01025766
}

</style>
