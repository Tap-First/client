<template>
    
    <div class="row">
        <div class="offset-md-2 col-md-8 p-3">
            <form action="" v-on:submit.prevent="createName">
                <div class="form-group">
                    <label for="name">Input name :</label>
                    <input id="name" type="text" v-model="name" class="form-control">
                </div>
                <button type="submit" class="btn btn-primary">submit</button>
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
    method: {
        createName: () => {
            localStorage.setItem("name", name)
        }
    }
}
</script>

<style>

</style>