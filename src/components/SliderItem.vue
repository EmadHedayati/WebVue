<template>
    <transition name="fade">
        <div class="row align-items-md-end background">
            <img class="image" v-bind:src="getImgUrl(data.url)">
            <div class="bottom">
                <div class="col-md-4 m-4">
                    <div class="row">
                        <div class="col">
                            <h2 class="h2 title text-white"><strong>{{data.title}}</strong></h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <span class="h6 text-white">{{data.description}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import SliderItemData from "../models/SliderItemData";

    export default {
        name: 'SliderItem',

        props: {
            data: SliderItemData
        },

        methods: {
            getImgUrl(url) {
                var images = require.context('../assets/', false, /\.jpg/)
                return images('./' + url)
            }
        }
    }
</script>

<style scoped>
    .background {
        position: relative;
        border-radius: 10px;
    }

    .image {
        border-radius: 10px;
        object-fit: cover;
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .image::after {
        border-radius: 100px;
        content: '';
        position: absolute;
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
