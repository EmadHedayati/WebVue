<template>
    <div id="app">
        <div class="row mb-5">
            <HeaderMenu/>
        </div>
        <div class="row mb-5">
            <div class="col-md-10 offset-1">
                <Slider :newsList="getSliderData()"/>
            </div>
        </div>
        <div class="row">
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
                        <MatchList :latestMatchList="getLatestMatchListData(3)" :favouritesMatchList="getFavouriteMatchListData(5)" title="Football"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <MatchList :latestMatchList="getLatestMatchListData(7)" :favouritesMatchList="getFavouriteMatchListData(4)" title="Football"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderMenu from "./components/HeaderMenu";
    import Slider from "./components/Slider";
    import NewsList from "./components/NewsList";
    import MatchList from "./components/MatchList";
    import Dummy from "./utils/Dummy";

    export default {
        name: 'app',

        components: {
            MatchList,
            NewsList,
            Slider,
            HeaderMenu,
        },

        methods: {
            getSliderData: function() {
                return Dummy.newsList(5);
            },

            getLatestNewsListData: function() {
                return Dummy.newsList(3);
            },

            getFavouriteNewsListData: function() {
                return Dummy.newsList(3);
            },

            getLatestMatchListData: function(num) {
                return Dummy.matchList(num);
            },

            getFavouriteMatchListData: function(num) {
                return Dummy.matchList(num);
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
