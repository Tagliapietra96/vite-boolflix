<template>
    <header class="bg-dark border-bottom border-secondary position-fixed top-0 end-0 start-0 p-3">
        <div class="container  ">
            <div class="row row-cols-2 row-cols-lg-3 justify-content-between align-items-center">
                <div class="col">
                    <h1 class="text-danger m-0">BOOLFLIX</h1>
                </div>
                <div class="col text-white text-center justify-content-between align-items-center d-none d-lg-flex">
                    <a href="#" class="m-0 text-white text-decoration-none" @click="store.dt.visible = 'all'">Home</a>
                    <a href="#" class="m-0 text-white text-decoration-none" @click="store.dt.visible = 'tv'">Tv
                        Series</a>
                    <a href="#" class="m-0 text-white text-decoration-none"
                        @click="store.dt.visible = 'movie'">Movies</a>
                    <a href="#" class="m-0 text-white text-decoration-none" @click="clickForGenres">Genres</a>
                    <div v-if="showGenres"
                        class="genres position-fixed top-0 bottom-0 start-0 end-0 d-flex align-items-center">
                        <div class="container h-75 bg-dark rounded-5 p-5 text-white overflow-auto " @mouseleave="showGenres=false">
                            <div class="row row-cols-5 g-4 align-items-center h-100">
                                <div v-for="genre in store.dt.allGenresList" class="col">
                                    <h2>{{ genre.name }}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <form @submit.prevent="sub" class="input-group input-group-sm w-50 ms-auto">
                        <input class="form-control bg-secondary" v-model="search">
                        <button class="btn btn-outline-light"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>

            </div>
        </div>
    </header>
</template>



<script>
import { store } from '../stores/store.js';
export default {
    emits: ['onSearching'],
    data() {
        return {
            store,
            search: '',
            showGenres: false
        }
    },
    methods: {
        sub() {
            this.$emit('onSearching', this.search);
        },
        clickForGenres() {
            this.store.dt.dummyGenresList.forEach(element => {
                if (!this.store.dt.allGenresList.includes(element)) {
                    this.store.dt.allGenresList.push(element)
                }
            });
            console.log(this.store.dt.allGenresList)
            this.showGenres = true
        }
    },
    mounted() {

    }
}
</script>



<style scoped lang="scss">
header {
    z-index: 1000;

    a {
        transition: all .5s;

        &:hover {
            transform: scale(1.1);
        }
    }
}

.genres {
    background-color: rgba(0, 0, 0, .8);
    z-index: 1002;
}
</style>