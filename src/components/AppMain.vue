<template>
    <ul>
        <li v-for="element in store.dt.moviesList">
            <ul>
                <li>{{ element.original_language }}</li>
                <li><span :class="'fi fi-' + getFlag(element.original_language)"></span></li>
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
    methods:{
        getFlag(country){
            if (country === 'en'){
                return 'gb';
            }else if (country === 'uk'){
                return 'ua';
            }else{
                return country;
            }
        },
    }
}
</script>



<style lang="scss">

</style>