<template>
    <ListGenerator :is-movie="true"/>
    <ListGenerator :is-movie="false"/>
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



<style lang="scss">

</style>