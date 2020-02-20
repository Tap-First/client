<template>
<main class="ingame text-center">
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
          <div class="box" @click="actionScore">
            <img src="@/assets/gif/giphy.gif" id="1" :style="{display: position === 1 ? 'block' : 'none'}">
          </div>
          <div class="box" @click="actionScore">
            <img src="@/assets/gif/giphy.gif" id="2" :style="{display: position === 2 ? 'block' : 'none'}">
          </div>
          <div class="box" @click="actionScore">
            <img src="@/assets/gif/giphy.gif" id="3" :style="{display: position === 3 ? 'block' : 'none'}">
          </div>
          <div class="box" @click="actionScore">
            <img src="@/assets/gif/giphy.gif" id="4" :style="{display: position === 4 ? 'block' : 'none'}">
          </div>
          <div class="box" @click="actionScore">
            <img src="@/assets/gif/giphy.gif" id="5" :style="{display: position === 5 ? 'block' : 'none'}">
          </div>
          <div class="box" @click="actionScore">
            <img src="@/assets/gif/giphy.gif" id="6" :style="{display: position === 6 ? 'block' : 'none'}">
          </div>
          <div class="box" @click="actionScore">
            <img src="@/assets/gif/giphy.gif" id="7" :style="{display: position === 7 ? 'block' : 'none'}">
          </div>
          <div class="box" @click="actionScore">
            <img src="@/assets/gif/giphy.gif" id="8" :style="{display: position === 8 ? 'block' : 'none'}">
          </div>
          <div class="box" @click="actionScore">
            <img src="@/assets/gif/giphy.gif" id="9" :style="{display: position === 9 ? 'block' : 'none'}">
          </div>
        </div>
        <div class="winner" v-if="!game">
          <img src="@/assets/gif/trophy.gif">
          <h1 class="mb-2">WINNER is</h1> 
          <h2 class="win mr-2" v-for="(winner,idx) in winners" :key="idx">{{ winner.name }} - Score: {{ winner.score }}</h2>
          <div class="mt-4">
            <span class="bt-games" @click="backToHome">MAIN LAGI KUY</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],
  data(){
    return {
      game: true,
      position: null,
      players: null,
      winners: null
    }
  },
  created(){
    this.getRooms()
    this.timerGame()
    this.startGamePos()
  },
  mounted(){

  },
  computed: {

  },
  methods: {
    timerGame(){
      setTimeout(() => {
        this.game = false
        // let playersStanding = this.players.sort(function(a, b){
        //   let keyA = a.score,
        //       keyB = b.score
        //   if(keyA < keyB) return 1;
        //   if(keyA > keyB) return -1;
        //   return 0;
        // });
        let playersStanding = []
        for(let i = 0; i < this.players.length; i++){
          if(playersStanding.length === 0){
            playersStanding.push(this.players[i])
          }else{
            if(playersStanding[0].score < this.players[i].score){
              playersStanding.pop()
              playersStanding.push(this.players[i])
            }else if(playersStanding[0].score == this.players[i].score){
              playersStanding.push(this.players[i])
            }
          }
        }
        this.winners = playersStanding
      }, 3000);
    },
    getRooms(){
      axios.get(`http://localhost:3000/rooms`)
      .then(res => {
        let room = res.data.rooms.map(el => {
          if(el.id === this.id){
            this.players = el.players
          }
        })
      })
      .catch(err => {
        console.log(err)
      })
    },
    startGamePos(){
      let dataStart = {
        id: this.id
      }
      axios.post('http://localhost:3000/startgame', dataStart)
      .then(res => {
        this.position = res.data.position
      })
      .catch(err => {
        console.log(err)
      })
    },
    backToHome(){
      localStorage.clear()
      this.$router.push({ path: '/' })
    },
    actionScore(){
      const id_room = this.id
      let name = localStorage.getItem('name')
      let updateScore = {
        id: id_room,
        name: name
      }
      console.log(id_room, name)
      axios.put(`http://localhost:3000/updatescore`, updateScore)
      .then(res => {
        console.log(res)
        this.players = res.data.players
        this.position = res.data.position
      })
      .catch(err => {
        console.log(err)
      })
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
</style>