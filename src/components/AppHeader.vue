<template>
    <form @submit.prevent="sub">
        <input class="form-control" v-model="search">
        <button class="btn btn-primary">cerca</button>
    </form>
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



<style lang="scss">
    
</style>