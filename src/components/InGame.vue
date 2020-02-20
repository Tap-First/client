<template>
<main class="ingame">
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <div class="sidebar-score">
          <div class="card-score mb-5">
            <div class="player-name">
              <span>Kevin</span>
            </div>
            <div class="player-score">
              <span>5</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-10">

      </div>
    </div>
  </div>
</main>
</template>

<script>
export default {
  
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
  .sidebar-score{
    margin: 2rem 0;
  }
  .card-score{
    background-color: rgba(255, 255, 255, 0.7);

    & .player-name{
      background-color: #265163;
      color: #ffffff;
      padding: 10px 0;

      & span{
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
      }
    }

    & .player-score{
      font-size: 40px;
      font-weight: bold;
    }
  }
</style>