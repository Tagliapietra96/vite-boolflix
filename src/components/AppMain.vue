<template>
    <main class="bg-dark text-danger p-5">
        <div class="container">
            <h2 class="text-center mb-4 fs-1">{{store.dt.movieScreenTitle}}</h2>
            <ListGenerator :is-movie="true"/>
            <h2 class="text-center mb-4 fs-1 mt-5">{{store.dt.serieScreenTitle}}</h2>
            <ListGenerator :is-movie="false"/>
        </div>
    </main>
</template>



<script>
import { store } from '../stores/store.js';
import ListGenerator from './ListGenerator.vue';
export default {
    components:{ListGenerator},
    data() {
        return {
            store,
        }
    },
    
}
</script>



<style scoped lang="scss">
    main{
        margin-top: 70px;
        height: 100%;
    }
</style>