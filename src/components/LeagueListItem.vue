<template>
    <div class="container-fluid border">
        <div class="row p-4">
            <div class="col">
                <router-link :to="{ name: 'league', params: { id: league.id }}" tag="div" class="cp">
                    <div class="row">
                        <span class="h5 text-dark font-weight-bold mr-4">{{league.title}}</span>
                    </div>
                </router-link>
                <div class="row">
                    <span class="h6 text-dark mr-4">{{league.description}}</span>
                </div>
            </div>
            <router-link :to="{ name: 'league', params: { id: league.id }}" tag="div" class="cp">
                <div class="col-auto p-0">
                    <img class="round image" :src="getImageUrl(league.image)"/>
                </div>
            </router-link>
        </div>
        <div class="row px-4 pb-4">
            <div class="col p-0">
                <span class="h6 text-muted">{{getFormattedTime(league.dateCreated)}}</span>
            </div>
            <div class="col-auto p-0">
                ...
            </div>
        </div>
    </div>
</template>

<script>
    import League from "../models/League";

    export default {
        name: 'LeagueListItem',

        props: {
            league: League,
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
