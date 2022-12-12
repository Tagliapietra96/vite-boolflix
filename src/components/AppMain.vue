<template>
    <ul>
        <li v-for="element in store.dt.moviesList">
            <ul>
                <li>{{ element.original_language }}</li>
                <li>{{ element.original_title }}</li>
                <li>{{ element.title }}</li>
                <li>{{ element.vote_average }}</li>
                <li><img :src="store.dt.imgBase + element.backdrop_path"></li>
            </ul>
        </li>
    </ul>
</template>



<script>
import { store } from '../stores/store.js';
export default {
    data() {
        return {
            store,
        }
    },
}
</script>



<style lang="scss">

</style>