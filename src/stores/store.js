import axios from 'axios';
import { reactive } from 'vue';

export const store = reactive({
    dt: {
        apiKey: '5f094bb02b0cd61d4ff7bc4872d8beca',
        urlBase: 'https://api.themoviedb.org/3',
        urlMovies: '/movie/popular',
        urlSeries: '/tv/popular',
        imgBase: 'https://image.tmdb.org/t/p/original',
        seriesList: [],
        moviesList: []
    },
    fn: {
        fetchData() {

            axios.get(store.dt.urlBase + store.dt.urlMovies, {
                params: {
                    api_key: store.dt.apiKey
                }
            }).then(resp => {
                store.dt.moviesList = resp.data.results;
                console.log(store.dt.moviesList)
            }).catch(error => {
                console.log(error);
            });

            axios.get(store.dt.urlBase + store.dt.urlSeries, {
                params: {
                    api_key: store.dt.apiKey
                }
            }).then(resp => {
                store.dt.seriesList = resp.data.results;
            }).catch(error => {
                console.log(error);
            });
        },
    }
})
