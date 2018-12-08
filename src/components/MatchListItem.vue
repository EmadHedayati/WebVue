<template>
    <div class="container-fluid">
        <div class="row p-3 align-items-md-center">
            <div class="col">
                <img class="circle image float-left mr-2" v-bind:src="getImageUrl(match.homeTeam.image)"/>
                <span class="h6 text-dark font-weight-bold float-left">{{match.homeTeam.shortTitle}}</span>
            </div>
            <div class="col-auto">
                <div class="row p-0">
                    <div class="col p-0 text-center">
                        <span class="h6 text-dark font-weight-bold">{{match.homeScore + " - " + match.awayScore}}</span>
                    </div>
                </div>
                <div class="row p-0">
                    <div class="col p-0 text-center">
                        <span class="h6 text-muted">{{match.live ? "Live" : getFormattedTime(match.date)}}</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <img class="circle image float-right ml-2" v-bind:src="getImageUrl(match.awayTeam.image)"/>
                <span class="h6 text-dark font-weight-bold float-right">{{match.awayTeam.shortTitle}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Match from "../models/Match";

    export default {
        name: "MatchListItem",

        props: {
            match: Match
        },

        methods: {
            getImageUrl(url) {
                return require("../assets/" + url);
            },

            getFormattedTime(date) {
                var days = [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ];
                var tmp = new Date();
                tmp.setTime(date);
                return days[tmp.getDay()] + " " + tmp.getHours() + ":" + tmp.getMinutes();
            }
        }
    };
</script>

<style scoped>
    .image {
        width: 20px;
        height: 20px;
    }
</style>
