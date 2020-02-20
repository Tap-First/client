<template>
  <div class="row room">
    <div class="column">
      <div class="card">
        <img
          src="https://cdnb.artstation.com/p/assets/images/images/012/193/905/original/maria-hager-titlescreen-retro-glitch.gif?1533552570"
          style="max-width: 28vh;min-height: 28vh;border-radius: 100%;margin-top: 2%;"
        />
        <h1>Room 1</h1>
        <button>JOIN</button>
      </div>
    </div>
  </div>
</template>

<script>
import socket from "@/config/socket.js";
export default {
  name: "Room",
  data() {
    return {
      rooms: []
    };
  }
};
</script>

<style scoped>
.room {
  font-family: Arial, Helvetica, sans-serif;
  /* background-color: rgb(255, 0, 0); */
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
  box-shadow: 0 4px 8px 0 black;
}

.title {
  color: gray;
  font-size: 18px;
}
button {
  border: none;
  padding: 8px;
  display: inline-block;
  color: rgb(0, 0, 0);
  cursor: pointer;
  width: 100%;
  border-radius: 20px;
  text-align: center;
  outline: none;
}
</style>