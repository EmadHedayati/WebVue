<template>
    <transition name="fade">
        <div class="row align-items-md-end round background">
            <img class="round image" :src="getImageUrl(news.image)">
            <div class="image-gradient">
            </div>
            <div class="bottom">
                <div class="col-md-6 m-4">
                    <div class="row">
                        <div class="col">
                            <h2 class="h2 title text-white"><strong>{{news.title}}</strong></h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <span class="h6 text-white">{{news.description}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import News from "../models/News";

    export default {
        name: 'News',

        props: {
            news: News
        },

        methods: {
            getImageUrl(url) {
                return require('../assets/' + url);
            }
        }
    }
</script>

<style scoped>
    .background {
        position: relative;
    }

    .image {
        object-fit: cover;
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .image-gradient {
        position: absolute;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        bottom: 0px;
        left: 0px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
        opacity: .6;
    }

    .title {
        font-weight: bold;
    }

    .bottom {
        position: absolute;
        width: 100%;
        bottom: 0px;
        left: 0px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 2s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
