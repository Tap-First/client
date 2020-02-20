<template>
  <div id="app">
    <router-view/>
    <div class="container-fluid">

     <front />
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
  background-color: cadetblue;
  height: 100vh;
}

</style>
