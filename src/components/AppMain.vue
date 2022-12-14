<template>
    <main class="bg-dark text-danger p-5">


            <ListGenerator :is-movie="true"/>

            <ListGenerator :is-movie="false"/>

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