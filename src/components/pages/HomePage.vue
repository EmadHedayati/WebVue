<template>
    <div>
        <div class="row mb-5">
            <div class="col-md-10 offset-1">
                <Slider :newsList="getSliderData()"/>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col-md-7 offset-1">
                <div class="row mb-5">
                    <div class="col">
                        <NewsList :newsList="getLatestNewsListData()" title="LATEST NEWS"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <NewsList :newsList="getFavouriteNewsListData()" title="FAVOURITE NEWS"/>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="row mb-5">
                    <div class="col">
                        <MatchList :latestMatchList="getLatestMatchListData(3)"
                                   :favouritesMatchList="getFavouriteMatchListData(5)"
                                   title="Football" :singleType="false"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <MatchList :latestMatchList="getLatestMatchListData(7)"
                                   :favouritesMatchList="getFavouriteMatchListData(4)"
                                   title="Football" :singleType="false"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Slider from "../Slider";
    import NewsList from "../partials/NewsList";
    import MatchList from "../MatchList";
    import Dummy from "../../utils/Dummy";

    export default {
        name: 'HomePage',

        components: {
            MatchList,
            NewsList,
            Slider,
        },

        methods: {
            getSliderData: function () {
                return Dummy.newsList(5);
            },

            getLatestNewsListData: function () {
                return Dummy.newsList(3);
            },

            getFavouriteNewsListData: function () {
                return Dummy.newsList(3);
            },

            getLatestMatchListData: function (num) {
                return Dummy.matchList(num);
            },

            getFavouriteMatchListData: function (num) {
                return Dummy.matchList(num);
            }
        }
    }
</script>

<style>
</style>
