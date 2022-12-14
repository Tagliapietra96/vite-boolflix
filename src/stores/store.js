import axios from 'axios';
import { reactive } from 'vue';

export const store = reactive({
    dt: {
        loading: true,
        visible: 'all',
        apiKey: '5f094bb02b0cd61d4ff7bc4872d8beca',
        search: '',
        genresFilter: null,
        urlBase: 'https://api.themoviedb.org/3',
        urlMovies: '/movie/popular',
        urlSeries: '/tv/popular',
        urlCast: '',
        urlGenre: '',
        imgBase: 'https://image.tmdb.org/t/p/original',
        movieScreenTitle: 'FILM POPOLARI SU BOOLFLIX',
        serieScreenTitle: 'SERIE TV POPOLARI SU BOOLFLIX',
        seriesList: [],
        moviesList: [],
        dummyCastList: [],
        castList: [],
        genresList: [],
        allGenresList:[],
        dummyGenresList: []

    },
    fn: {
        fetchData() {
            store.dt.loading = true;
            axios.get(store.dt.urlBase + store.dt.urlMovies, {
                params: {
                    api_key: store.dt.apiKey,
                    query: store.dt.search,
                    with_genres: store.dt.genresFilter,
                }
            }).then(resp => {
                store.dt.moviesList = resp.data.results;
                console.log(store.dt.moviesList)
            }).catch(error => {
                console.log(error);
            });

            axios.get(store.dt.urlBase + store.dt.urlSeries, {
                params: {
                    api_key: store.dt.apiKey,
                    query: store.dt.search,
                    with_genres: store.dt.genresFilter,
                }
            }).then(resp => {
                store.dt.seriesList = resp.data.results;
                console.log(store.dt.seriesList)
            }).catch(error => {
                console.log(error);
            });

            axios.get(store.dt.urlBase + '/genre/movie/list', {
                params: {
                    api_key: store.dt.apiKey,
                }
            }).then(resp => {
                store.dt.allGenresList = resp.data.genres;
                console.log(store.dt.allGenresList)
            }).catch(error => {
                console.log(error);
            });

            axios.get(store.dt.urlBase + '/genre/tv/list', {
                params: {
                    api_key: store.dt.apiKey,
                }
            }).then(resp => {
                store.dt.dummyGenresList = resp.data.genres;
                console.log(store.dt.allGenresList)
                store.dt.loading = false;
            }).catch(error => {
                console.log(error);
            });
        },
        fetchCast(){
            store.dt.castList = [];
            axios.get(store.dt.urlBase + store.dt.urlCast, {
                params: {
                    api_key: store.dt.apiKey,
                }
            }).then(resp => {
                store.dt.dummyCastList = resp.data.cast;
                for(let i = 0; i < 5; i++){
                    store.dt.castList.push(store.dt.dummyCastList[i].name)
                }
                console.log(store.dt.castList)
            }).catch(error => {
                console.log(error);
            });
        },
        fetchGenres(){
            store.dt.genresList = [];
            axios.get(store.dt.urlBase + store.dt.urlGenre, {
                params: {
                    api_key: store.dt.apiKey,
                }
            }).then(resp => {
                store.dt.genresList = resp.data.genres;
                console.log(store.dt.genresList)
            }).catch(error => {
                console.log(error);
            });
        },

    }
})
