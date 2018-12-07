<template>
    <div class="container-fluid background">
        <div class="row p-4">
            <div class="col">
                <div class="row">
                    <span class="h5 text-dark font-weight-bold">{{news.title}}</span>
                </div>
                <div class="row">
                    <span class="h6 text-dark">{{news.description}}</span>
                </div>
            </div>
            <div class="col-auto p-0">
                <img class="image" v-bind:src="getImgUrl(news.url)"/>
            </div>
        </div>
        <div class="row px-4 pb-4">
            <div class="col p-0">
                <span class="h6 text-muted">{{getFormattedTime(news.date)}}</span>
            </div>
            <div class="col-auto p-0">
                ...
            </div>
        </div>
    </div>
</template>

<script>
    import News from "../models/News";

    export default {
        name: 'NewsListItem',

        props: {
            news: News,
        },

        methods: {
            getImgUrl(url) {
                var images = require.context('../assets/', false, /\.jpg/);
                return images('./' + url)
            },

            getFormattedTime(date) {
                var tmp = new Date();
                tmp.setTime(date);
                return tmp.toDateString();
            }
        },
    }
</script>

<style scoped>
    .background {
        border-radius: 10px;
        border: 1px solid #c3c3c3;
    }

    .image {
        border-radius: 10px;
        border: 1px solid #c3c3c3;
        width: 80px;
        height: 80px;
    }
</style>
