import axios from 'axios';
import { reactive } from 'vue';

export const store = reactive({
    dt: {
        apiKey: '5f094bb02b0cd61d4ff7bc4872d8beca',
        urlBase: 'https://api.themoviedb.org/3',
        urlMovies: '/movie/popular',
        urlSeries: '/tv/popular',
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
                console.log(resp.data);
            }).catch(error => {
                console.log(error);
            });
            axios.get(store.dt.urlBase + store.dt.urlSeries, {
                params: {
                    api_key: store.dt.apiKey
                }
            }).then(resp => {
                console.log(resp.data);
            }).catch(error => {
                console.log(error);
            });
        },
    }
})
