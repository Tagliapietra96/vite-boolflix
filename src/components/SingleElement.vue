<template>
    <div class="col">
        <div class=" position-relative">
            <img v-if="element.backdrop_path" class="rounded-3" :src="store.dt.imgBase + element.backdrop_path">
            <img v-else src="../../public/Image_not_available.png">
            <div class="overlay rounded-3 position-absolute top-0 bottom-0 start-0 end-0 py-3 px-5 text-white fs-3"
                @click="getDetails(element.id)">
                <div v-if="isMovie">
                    <p v-if="element.original_title !== element.title">{{ element.original_title }}</p>
                    <p>{{ element.title }}</p>
                </div>
                <div v-else>
                    <p v-if="element.original_name !== element.name">{{ element.original_name }}</p>
                    <p>{{ element.name }}</p>
                </div>
                <p><span :class="'fi fi-' + getFlag(element.original_language)"></span></p>
                <p class="text-warning position-absolute bottom-0">
                    <i class="fa-solid fa-star" v-for="placeholder in fullStars"></i>
                    <i class="fa-regular fa-star" v-for="placeholder in emptyStars"></i>
                </p>
            </div>
            <div v-if="details" class="info position-fixed top-0 bottom-0 start-0 end-0 d-flex align-items-center"
                @click="details = false">
                <div class="container h-75 bg-dark rounded-5 p-5 text-white ">
                    <h2 v-if="isMovie" class="fs-1">Title: {{ element.title }}</h2>
                    <h2 v-else class="fs-1">Title: {{ element.name }}</h2>
                    <h2 class="fs-1">Language: <span :class="'fs-2 fi fi-' + getFlag(element.original_language)"></span>
                    </h2>
                    <h2 class="fs-1">
                        Rating:
                        <i class="fa-solid fa-star" v-for="placeholder in fullStars"></i>
                        <i class="fa-regular fa-star" v-for="placeholder in emptyStars"></i>
                    </h2>
                    <h2 class="fs-1">
                        Cast: 
                        <span class="fs-2" v-for="name in store.dt.castList">{{name}}, </span>
                        <span class="fs-2">and more...</span>
                    </h2>
                    <h2 class="fs-1"></h2>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import { store } from '../stores/store.js';
export default {
    props: {
        element: Object,
        isMovie: Boolean,
    },
    data() {
        return {
            store,
            details: false,
            fullStars: [],
            emptyStars: [],
        }
    },
    methods: {
        getFlag(country) {
            if (country === 'en') {
                return 'gb';
            } else if (country === 'uk') {
                return 'ua';
            } else if (country === 'hi') {
                return 'in';
            } else if (country === 'ja') {
                return 'jp';
            } else {
                return country;
            }
        },
        getRate() {
            this.fullStars = [];
            this.emptyStars = [];
            const numFull = Math.ceil(this.element.vote_average / 2);
            const numEmpty = 5 - numFull;
            for (let i = 0; i < numFull; i++) {
                this.fullStars.push('placeHolder')
            }
            for (let i = 0; i < numEmpty; i++) {
                this.emptyStars.push('placeHolder')
            }
        },
        getDetails(id){
            if(this.isMovie){
                this.store.dt.urlCast = `/movie/${id}/credits`;
            }else{
                this.store.dt.urlCast = `/tv/${id}/credits`;
            }
            this.store.fn.fetchCast();
            this.details = true
        },
    },
    created() {
        this.getRate();
    },
}
</script>



<style scoped lang="scss">
img {
    width: 100%;
    aspect-ratio: 2/1.2;
    object-fit: cover;
    object-position: center;
}

.overlay {
    background-color: rgba(0, 0, 0, .8);
    opacity: 0;
    transition: opacity .5s;

    &:hover {
        opacity: 1;
    }
}

div.info {
    background-color: rgba(0, 0, 0, .8);
    z-index: 1001;
}
</style>