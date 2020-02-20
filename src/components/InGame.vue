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
        <div class="gameplay" v-if="game">
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
        <div class="winner" v-if="!game">
          <img src="@/assets/gif/trophy.gif" alt="">
          <h1 class="mb-4">WINNER is <span class="win">TAQI</span></h1>
          <span class="bt-games" @click="backToHome">MAIN LAGI KUY</span>
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
      game: true,
      position: null,
      players: [
        { name: 'Kevin Tan', score: 2 },
        { name: 'Taqi', score: 4 },
        { name: 'Putra', score: 3 },
        { name: 'Anova', score: 5 },
      ]
    }
  },
  mounted(){

  },
  computed: {

  },
  methods: {
    backToHome(){
      localStorage.clear()
      this.$router.push({ path: '/' })
    }
  },
}
</script>

<style lang="scss" scoped>
  main.ingame{
    font-family: 'Luckiest Guy', cursive;
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

      &:hover{
        cursor: pointer;
      }

      & img{
        width: 180px;
        height: 180px;
      }
    }
  }
  .winner{
    margin: 4rem 0;
    color: #ffffff;
    letter-spacing: 3px;

    & img{
      width: 300px;
      margin-bottom: 1rem;
    }

    & span.win{
      color: #ffd000;
    }

    & .bt-games{
      background-color: #ffd000;
      color: #131313;
      padding: 1.3rem 3rem 1rem 3rem;
      letter-spacing: 1px;
      font-size: 1.5rem;
      border-radius: 5px;

      &:hover{
        cursor: pointer;
        font-size: 1.7rem;
        color: #000000;
      }
    }
  }
  .sidebar-score{
    margin: 2.5rem 2rem;
  }
  .card-score{
    background-color: rgba(0, 0, 0, 1);

    & .player-name{
      background-color: rgba(72, 134, 80, .85);
      color: #ffffff;
      padding: 10px 0;

      & span{
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 3px;
      }
    }

    & .player-score{
      font-size: 45px;
      font-weight: bold;
      color: #ffffff;
      padding-top: 10px;
    }
  }
</style>