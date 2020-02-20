<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 text-light mt-5">
        <form v-on:submit.prevent="createRoom">
          <div class="form-group">
            <label for>name room:</label>
            <input v-model="nameRoom" type="text" class="form-control" />
          </div>
          <button type="submit" class="btn btn-success text-center">create</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nameRoom: ""
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
          this.$emit("getRoom");
          this.nameRoom = "";
          this.$router.push("/ingame");
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