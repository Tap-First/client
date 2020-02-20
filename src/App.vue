<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
#app {
  background-image: url("./assets/images/bg-home.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
</style>
