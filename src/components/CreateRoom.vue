<template>
  <div class="container-fluid">
    <div class="row">
      <div class="offset-md-3 col-md-6 p-3 text-light text-center mt-5">
        <form v-on:submit.prevent="createRoom">
          <div class="form-group">
            <input
              v-model="nameRoom"
              type="text"
              class="form-control"
              placeholder="Input room name"
              :disabled="disableCreate"
            />
          </div>
          <button
            type="submit"
            class="btn btn-success text-center"
            :disabled="disableCreate"
          >Create Room</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import socket from "@/config/socket.js";
export default {
  data() {
    return {
      nameRoom: "",
      disableCreate: false
    };
  },
  methods: {
    createRoom() {
      axios({
        url: "http://localhost:3000/createroom",
        method: "post",
        data: {
          roomName: this.nameRoom,
          playerName: localStorage.getItem("name")
        }
      })
        .then(({ data }) => {
          // this.$emit("getRoom");
          socket.emit("findAllRoom", data);
          this.nameRoom = "";
          this.disableCreate = true;
          localStorage.setItem("byroom", localStorage.getItem("name"));
          this.$router.push({
            name: "InGame",
            params: { id: data.rooms[data.rooms.length - 1].id }
          });
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  }
};
</script>

<style>
</style>