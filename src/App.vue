<template>
  <AppHeader @on-searching="filterResults" />
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
  methods: {
    filterResults(search) {
      if (search === '') {
        this.store.dt.urlMovies = '/movie/popular';
        this.store.dt.urlSeries = '/tv/popular';
      } else {
        this.store.dt.urlMovies = '/search/movie';
        this.store.dt.urlSeries = '/search/tv';
      }
      this.store.dt.search = search;
      this.store.fn.fetchData();
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
