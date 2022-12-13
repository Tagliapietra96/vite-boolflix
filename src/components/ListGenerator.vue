<template>
    <div class="row row-cols-1 row-cols-lg-2 g-5">
        <SingleElement v-for="element in getList()" :element="element" :is-movie="isMovie"/>
    </div>
</template>



<script>
import SingleElement from './SingleElement.vue';
import { store } from '../stores/store.js';
export default {
    components: {SingleElement},
    props: {
        isMovie: Boolean,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getList(){
            if (this.isMovie){
                return this.store.dt.moviesList
            }else{
                return this.store.dt.seriesList
            }
        }
    }
}
</script>



<style scoped lang="scss">
    
</style>