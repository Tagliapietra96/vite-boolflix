<template>
    <header class="bg-dark border-bottom border-secondary position-fixed top-0 end-0 start-0 p-3">
        <div class="container  ">
            <div class="row row-cols-3 justify-content-between align-items-center">
                <div class="col">
                    <h1 class="text-danger m-0">BOOLFLIX</h1>
                </div>
                <div class="col text-white text-center d-flex justify-content-between align-items-center">
                    <p class="m-0">Home</p>
                    <p class="m-0">Home</p>
                    <p class="m-0">Home</p>
                    <p class="m-0">Home</p>
                    <p class="m-0">Home</p>
                </div>
                <div class="col">
                    <form @submit.prevent="sub" class="input-group input-group-sm w-50 ms-auto">
                        <input class="form-control bg-secondary" v-model="search">
                        <button class="btn btn-outline-light"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>

            </div>
        </div>
    </header>
</template>



<script>
export default {
    emits: [ 'onSearching' ],
    data(){
        return{
            search: '',
        }
    },
    methods: {
        sub(){
            this.$emit('onSearching', this.search);
        },
    }
}
</script>



<style scoped lang="scss">
    header{
        z-index: 1000;
    }
</style>