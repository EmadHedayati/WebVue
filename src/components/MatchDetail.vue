<template>
    <div class="container-fluid border p-3">
        <div class="row px-3 mt-4">
            <div class="col">
                <span class="h3 text-dark font-weight-bold">NEXT MATCH</span>
            </div>
        </div>
        <div class="row px-3 mb-4">
            <div class="col">
                <span class="h6 text-muted font-weight-light">{{getFormattedTime(match.date)}}</span>
            </div>
        </div>
        <div class="row p-3 align-items-md-center">
            <div class="col">
                <div class="row justify-content-start">
                    <div class="col-auto align-self-start text-center">
                        <div class="row mb-3">
                            <div class="col">
                                <img class="circle image float-left" :src="getImageUrl(match.homeTeam.image)"/>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-auto">
                                <span class="h6 text-dark font-weight-bold float-left">{{match.homeTeam.shortTitle}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-auto">
                <div class="row p-0">
                    <div class="col p-0 text-center">
                        <span class="display-3 text-info font-weight-bold">VS</span>
                    </div>
                </div>
                <div class="row p-0">
                    <div class="col p-0 text-center">
                        <span class="h6 text-dark font-weight-bold">{{match.stadium.title}}</span>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row justify-content-end">
                    <div class="col-auto">
                        <div class="row mb-3">
                            <div class="col">
                                <img class="circle image float-left" :src="getImageUrl(match.awayTeam.image)"/>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-auto">
                                <span class="h6 text-dark font-weight-bold float-left">{{match.awayTeam.shortTitle}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Match from "../models/Match";

    export default {
        name: "MatchDetail",

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
        width: 130px;
        height: 130px;
    }
</style>
