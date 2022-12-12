<template>
  
</template>



<script>
import {store} from './stores/store';
export default {
  data(){
    return{
      store,
    }
  },
  mounted(){
    this.store.fn.fetchData();
  }
}
</script>



<style lang="scss">
  @use './styles/general.scss';

</style>
