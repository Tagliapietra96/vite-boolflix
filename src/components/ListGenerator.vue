<template>
    <ul>
        <SingleElement v-for="element in store.dt.moviesList"/>
    </ul>
</template>



<script>
import SingleElement from './SingleElement.vue';
export default {
    components: {SingleElement}
}
</script>



<style lang="scss">
    
</style>