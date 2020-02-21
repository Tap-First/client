<template>
  <main class="ingame text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="sidebar-score">
            <div class="card-score mb-3" v-for="(player, idx) in players" :key="idx">
              <div class="player-name">
                <span>{{ player.name }}</span>
              </div>
              <div class="player-score">
                <span>{{ player.score }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="rules" v-if="rules">
            <audio controls autoplay hidden>
              <source src="../assets/sound/playgame.mp3" type="audio/mpeg" />
            </audio>
            <h1 class="mb-2">Cara Bermain</h1>
            <p>Permainan ini menghitung siapa cepat mentrigger object yang ada pada ke sembilan kotak</p>
            <p>Siap siap jari tangan anda untuk mendahului kecepatan jari tangan lawan anda</p>
            <div class="mt-5">
              <span class="bt-games" v-if="players.length > 1" @click="startingGame">Start Game</span>
            </div>
          </div>
          <div class="gameplay" v-if="game">
            <audio autoplay hidden>
              <source src="../assets/sound/play.mp3" type="audio/mpeg" />
            </audio>
            <div class="box" @click="actionScore(1)">
              <img
                src="@/assets/gif/giphy.gif"
                id="1"
                :style="{display: position === 1 ? 'block' : 'none'}"
              />
            </div>
            <div class="box" @click="actionScore(2)">
              <img
                src="@/assets/gif/giphy.gif"
                id="2"
                :style="{display: position === 2 ? 'block' : 'none'}"
              />
            </div>
            <div class="box" @click="actionScore(3)">
              <img
                src="@/assets/gif/giphy.gif"
                id="3"
                :style="{display: position === 3 ? 'block' : 'none'}"
              />
            </div>
            <div class="box" @click="actionScore(4)">
              <img
                src="@/assets/gif/giphy.gif"
                id="4"
                :style="{display: position === 4 ? 'block' : 'none'}"
              />
            </div>
            <div class="box" @click="actionScore(5)">
              <img
                src="@/assets/gif/giphy.gif"
                id="5"
                :style="{display: position === 5 ? 'block' : 'none'}"
              />
            </div>
            <div class="box" @click="actionScore(6)">
              <img
                src="@/assets/gif/giphy.gif"
                id="6"
                :style="{display: position === 6 ? 'block' : 'none'}"
              />
            </div>
            <div class="box" @click="actionScore(7)">
              <img
                src="@/assets/gif/giphy.gif"
                id="7"
                :style="{display: position === 7 ? 'block' : 'none'}"
              />
            </div>
            <div class="box" @click="actionScore(8)">
              <img
                src="@/assets/gif/giphy.gif"
                id="8"
                :style="{display: position === 8 ? 'block' : 'none'}"
              />
            </div>
            <div class="box" @click="actionScore(9)">
              <img
                src="@/assets/gif/giphy.gif"
                id="9"
                :style="{display: position === 9 ? 'block' : 'none'}"
              />
            </div>
          </div>
          <div class="winner" v-if="wins">
            <audio autoplay hidden>
              <source src="../assets/sound/applause.mp3" type="audio/mpeg" />
            </audio>
            <img src="@/assets/gif/trophy.gif" />
            <h1 class="mb-2">WINNER is</h1>
            <h2
              class="win mr-2"
              v-for="(winner,idx) in winners"
              :key="idx"
            >{{ winner.name }} - Score: {{ winner.score }}</h2>
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
import axios from "axios";
import socket from "@/config/socket.js";
export default {
  props: ["id"],
  data() {
    return {
      rules: true,
      game: false,
      wins: false,
      position: null,
      players: [],
      winners: null
    };
  },
  created() {
    this.getRooms();
  },
  mounted() {},
  watch: {
    players() {
      this.players;
    }
  },
  mounted() {
    socket.on("getPlayers", dataPlayers => {
      this.players = dataPlayers;
    });
    socket.on("connectRoomGame", dataPlayers => {
      this.players = dataPlayers;
    });
    socket.on("getStatusGame", (rules, game) => {
      this.rules = rules;
      this.game = game;
      this.startGamePos(); //kevin
      this.timerGame(); //kevin
    });
    socket.on("getnewposition", newposition => {
      //kevin
      this.position = newposition;
    });
    socket.on("startposition", startposition => {
      //kevin
      this.position = startposition;
    });
    socket.on("setscore", players => {
      //kevin
      this.players = players;
    });
  },
  methods: {
    startingGame() {
      this.rules = false;
      this.game = true;
      socket.emit("gameStatus", this.rules, this.game);
    },
    timerGame() {
      setTimeout(() => {
        this.game = false;
        let playersStanding = [];
        for (let i = 0; i < this.players.length; i++) {
          if (playersStanding.length === 0) {
            playersStanding.push(this.players[i]);
          } else {
            if (playersStanding[0].score < this.players[i].score) {
              playersStanding.pop();
              playersStanding.push(this.players[i]);
            } else if (playersStanding[0].score == this.players[i].score) {
              playersStanding.push(this.players[i]);
            }
          }
        }
        this.winners = playersStanding;
        this.wins = true;
      }, 10000);
    },
    getRooms() {
      let data;
      axios
        .get(`http://localhost:3000/rooms`)
        .then(res => {
          let room = res.data.rooms.map(el => {
            if (el.id === this.id) {
              this.players = el.players;
              data = el;
            }
          });
          socket.emit("getPlayerInRoom", data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    startGamePos() {
      let dataStart = {
        id: this.id
      };
      axios
        .post("http://localhost:3000/startgame", dataStart)
        .then(res => {
          console.log(res);
          socket.emit("starter", res.data.position); //kevin
        })
        .catch(err => {
          console.log(err);
        });
    },
    backToHome() {
      let name = localStorage.getItem("name");
      let dataDelete = {
        id: this.id,
        name: name
      };
      console.log(dataDelete, "<<<<<<<");
      axios({
        method: "DELETE",
        url: `http://localhost:3000/quitgame`,
        data: dataDelete
      })
        .then(res => {
          this.$router.push({ path: "/" });
          localStorage.clear();
        })
        .catch(err => {
          console.log(err);
        });
    },
    actionScore(positionId) {
      const id_room = this.id;
      let name = localStorage.getItem("name");
      let updateScore = {
        id: id_room,
        name: name
      };
      console.log(id_room, name);
      if (this.position === positionId) {
        axios
          .put(`http://localhost:3000/updatescore`, updateScore)
          .then(res => {
            console.log(res);
            this.position = res.data.position;
            socket.emit("newposition", this.position); //kevin
            socket.emit("newscore", res.data.players); //kevin
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
main.ingame {
  font-family: "Luckiest Guy", cursive;
  background: url("../assets/images/bg-game.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>