<template>
  <div
    class="loader bg-white position-fixed top-0 bottom-0 end-0 start-0 d-flex align-items-center justify-content-center"
    v-if="store.dt.loading">
    <h2 class="fs-1">Loading...</h2>
  </div>
  <AppMain v-else/>
  <AppHeader @on-searching="filterResults" />
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
        this.store.dt.movieScreenTitle = 'FILM POPOLARI SU BOOLFLIX';
        this.store.dt.serieScreenTitle = 'SERIE TV POPOLARI SU BOOLFLIX';
        this.store.dt.urlMovies = '/movie/popular';
        this.store.dt.urlSeries = '/tv/popular';
      } else {
        this.store.dt.movieScreenTitle = `RISULTATI IN FILM PER: "${search}"`;
        this.store.dt.serieScreenTitle = `RISULTATI IN SERIE TV PER: "${search}"`;
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

.loader {
  z-index: 1002;
}
</style>
