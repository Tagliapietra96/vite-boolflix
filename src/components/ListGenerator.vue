<template >
    <div  v-if="getVisible() && getList().length > 0" class="container pb-5">
        <h2 v-if="isMovie" class="text-center mb-4 fs-1 pt-5">{{store.dt.movieScreenTitle}}</h2>
        <h2  v-else class="text-center mb-4 fs-1 pt-5">{{store.dt.serieScreenTitle}}</h2>
        <div class="row row-cols-1 row-cols-lg-2 g-5">
            <SingleElement v-for="element in getList()" :element="element" :is-movie="isMovie"/>
        </div>
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
        },
        getVisible(){

            if(this.store.dt.visible === 'all'){
                return true;
            }else if(this.store.dt.visible === 'tv'){
                return !this.isMovie;
            }else if(this.store.dt.visible === 'movie'){
                return this.isMovie;
            }

        }
    },
}
</script>



<style scoped lang="scss">
    
</style>