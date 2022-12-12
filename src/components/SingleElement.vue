<template>
    <li class="list-unstyled text-center" v-if="isMovie"> 
        <h2 v-if="element.original_title !== element.title">{{ element.original_title }}</h2>
        <h2 >{{ element.title }}</h2>
        <h3>{{ element.vote_average }}</h3>
        <p><span :class="'fi fi-' + getFlag(element.original_language)"></span></p>
        <img v-if="element.backdrop_path" :src="store.dt.imgBase + element.backdrop_path">
        <h1 v-else class="text-danger">Img not avaible</h1>
    </li>
    <li class="list-unstyled text-center" v-else> 
        <h2 v-if="element.original_name !== element.name">{{ element.original_name }}</h2>
        <h2>{{ element.name }}</h2>
        <h3>{{ element.vote_average }}</h3>
        <p><span :class="'fi fi-' + getFlag(element.original_language)"></span></p>
        <img v-if="element.backdrop_path" :src="store.dt.imgBase + element.backdrop_path">
        <h1 v-else class="text-danger">Img not avaible</h1>
    </li>
</template>



<script>
import { store } from '../stores/store.js';
export default {
    props:{
        element: Object,
        isMovie: Boolean,
    },
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
            }else if (country === 'hi'){
                return 'in';
            }else if (country === 'ja'){
                return 'jp';
            }else{
                return country;
            }
        },
    }
}
</script>



<style lang="scss">
    
</style>