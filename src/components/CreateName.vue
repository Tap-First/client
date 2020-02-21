<template>
  <div class="row">
    <div class="offset-md-3 col-md-6 p-3 text-light text-center">
      <form action v-on:submit.prevent="createName">
        <p class="error">{{ message }}</p>
        <div class="form-group">
          <input
            id="name"
            type="text"
            v-model="name"
            class="form-control"
            placeholder="Input your name"
          />
        </div>
        <button type="submit" class="btn btn-success">Play Game</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      message: null,
      error: null
    };
  },
  methods: {
    createName() {
      axios({
        url: "http://localhost:3000/createuser",
        method: "post",
        data: {
          name: this.name
        }
      })
        .then(({ data }) => {
          if (data.name.length > 10) {
            this.error = true;
            this.message = "Max character 10";
          } else if (data.name.trim().length === 0) {
            this.error = true;
            this.message = "Please input your name";
          } else {
            localStorage.setItem("name", data.name);
            this.$router.push({ name: "Home" });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
p.error {
  font-family: "Luckiest Guy", cursive;
  color: #ffd000;
  font-size: 1.5rem;
}
</style>