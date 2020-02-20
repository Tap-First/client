<template>
    
    <div class="row">
<<<<<<< HEAD
        <div class="offset-md-2 col-md-8 p-3 text-light">
=======
        <div class="offset-md-2 col-md-8 p-3">
>>>>>>> 0445f0a9050e957f1546c6e52a793fbf01025766
            <form action="" v-on:submit.prevent="createName" >
                <div class="form-group">
                    <label for="name">Input name :</label>
                    <input id="name" type="text" v-model="name" class="form-control">
                </div>
<<<<<<< HEAD
                <button type="submit" class="btn btn-success">submit</button>
=======
                <button type="submit" class="btn btn-primary">submit</button>
>>>>>>> 0445f0a9050e957f1546c6e52a793fbf01025766
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: null
        }
    },
    methods: {
        createName(){
<<<<<<< HEAD
            localStorage.setItem("name", this.name)
            this.$router.push({name: "Home"})
=======
            console.log(this.name)
            localStorage.setItem("name", this.name)
>>>>>>> 0445f0a9050e957f1546c6e52a793fbf01025766
        }
    }
}
</script>

<style>

</style>