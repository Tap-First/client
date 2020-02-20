<template>
  <div>
    <create-room @getRoom="findAllRooms" />
    <div class="row room">
      <div class="column" v-for="(room,i) in this.rooms.rooms" :key="i">
        <div class="card">
          <img
            src="https://cdnb.artstation.com/p/assets/images/images/012/193/905/original/maria-hager-titlescreen-retro-glitch.gif?1533552570"
            style="max-width: 28vh;min-height: 28vh;border-radius: 100%;margin-top: 2%;"
          />
          <h1>{{room.name}}</h1>
          <button @click="goToIngame(room.id)">JOIN</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import socket from "@/config/socket.js";
import CreateRoom from "../components/CreateRoom";
import axios from "axios";
export default {
  name: "Room",
  data() {
    return {
      rooms: []
    };
  },
  components: {
    CreateRoom
  },
  methods: {
    findAllRooms() {
      axios({
        url: "http://localhost:3000/rooms",
        method: "get"
      })
        .then(({ data }) => {
          this.rooms = data;
        })
        .catch(err => {
          console.log(err.message);
        });
    },
    goToIngame(id) {
      axios({
        url: "http://localhost:3000/updateplayer",
        method: "put",
        data: {
          id,
          name: localStorage.getItem("name")
        }
      })
        .then(({ data }) => {
          this.$router.push("/ingame");
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  },
  created() {
    this.findAllRooms();
  }
};
</script>

<style scoped>
.room {
  font-family: Arial, Helvetica, sans-serif;
}

.column {
  width: 20%;
  float: left;
}

.row::after {
  content: "";
  display: table;
  clear: both;
}

@media screen and(max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

.card {
  box-shadow: 0 2px 4px 0 rgb(49, 49, 49);
  max-width: 300px;
  background-color: white;
  text-align: center;
  border-radius: 40px;
  margin: 10%;
  padding-bottom: 15px;
  align-items: center;
  max-height: 100%;
}

.card:hover {
  box-shadow: 0 4px 8px 0 rgb(93, 93, 93);
}

.title {
  color: gray;
  font-size: 18px;
}
button {
  box-shadow: 3px 4px 0px 0px #899599;
  background: linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);
  background-color: #ededed;
  border-radius: 15px;
  border: 1px solid #d6bcd6;
  display: inline-block;
  cursor: pointer;
  color: #3a8a9e;
  font-family: Arial;
  font-size: 17px;
  padding: 7px 25px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #e1e2ed;
  outline: none;
}
button:active {
  position: relative;
  top: 3px;
}
button:hover {
  background: linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);
  background-color: #bab1ba;
}
</style>