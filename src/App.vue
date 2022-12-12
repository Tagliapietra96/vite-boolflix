<template>
  <AppHeader />
  <AppMain />
</template>



<script>
import { store } from './stores/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  components: { AppHeader, AppMain },
  data() {
    return {
      store,
    }
  },
  mounted() {
    this.store.fn.fetchData();
  }
}
</script>



<style lang="scss">
@use './styles/general.scss';
</style>
