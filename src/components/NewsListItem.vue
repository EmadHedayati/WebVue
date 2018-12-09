<template>
    <div class="container-fluid border">
        <div class="row p-4">
            <div class="col">
                <div class="row">
                    <span class="h5 text-dark font-weight-bold mr-4">{{news.title}}</span>
                </div>
                <div class="row">
                    <span class="h6 text-dark mr-4">{{news.description}}</span>
                </div>
            </div>
            <div class="col-auto p-0">
                <img class="round image" :src="getImageUrl(news.image)"/>
            </div>
        </div>
        <div class="row px-4 pb-4">
            <div class="col p-0">
                <span class="h6 text-muted">{{getFormattedTime(news.dateCreated)}}</span>
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
            getImageUrl(url) {
                return require('../assets/' + url);
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
    .image {
        width: 80px;
        height: 80px;
    }
</style>
