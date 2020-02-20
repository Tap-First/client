<template>
<main class="ingame">
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="sidebar-score">
          <div class="card-score mb-3" v-for="(player, idx) in players" :key="idx">
            <div class="player-name"><span>{{ player.name }}</span></div>
            <div class="player-score"><span>{{ player.score }}</span></div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="gameplay">
          <div class="box">
            <img src="@/assets/gif/giphy.gif" id="1" style="display:block">
          </div>
          <div class="box">
            <img src="@/assets/gif/giphy.gif" id="2" style="display:none">
          </div>
          <div class="box">
            <img src="@/assets/gif/giphy.gif" id="3" style="display:none">
          </div>
          <div class="box">
            <img src="@/assets/gif/giphy.gif" id="4" style="display:none">
          </div>
          <div class="box">
            <img src="@/assets/gif/giphy.gif" id="5" style="display:none">
          </div>
          <div class="box">
            <img src="@/assets/gif/giphy.gif" id="6" style="display:none">
          </div>
          <div class="box">
            <img src="@/assets/gif/giphy.gif" id="7" style="display:none">
          </div>
          <div class="box">
            <img src="@/assets/gif/giphy.gif" id="8" style="display:none">
          </div>
          <div class="box">
            <img src="@/assets/gif/giphy.gif" id="9" style="display:none">
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
</template>

<script>
export default {
  data(){
    return {
      position: null,
      players: [
        { name: 'Kevin', score: 0 },
        { name: 'Taqi', score: 0 },
        { name: 'Putra', score: 0 },
        { name: 'Anova', score: 0 },
      ]
    }
  },
  mounted(){

  },
  computed: {

  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
  main.ingame{
    background: url('../assets/images/bg-game.jpg');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }
  .gameplay{
    margin: 2rem 0;
    max-height: 600px;

    & .box{
      display: inline-block;
      background-color: rgba(72, 134, 80, .85);
      width: 180px;
      height: 180px;
      margin: 0.5rem;

      & img{
        width: 180px;
        height: 180px;
      }
    }
  }
  .sidebar-score{
    margin: 2.5rem 2rem;
  }
  .card-score{
    background-color: rgba(0, 0, 0, 0.9);

    & .player-name{
      background-color: rgba(72, 134, 80, .85);
      color: #ffffff;
      padding: 10px 0;

      & span{
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
      }
    }

    & .player-score{
      font-size: 50px;
      font-weight: bold;
      color: #ffd900;
    }
  }
</style>