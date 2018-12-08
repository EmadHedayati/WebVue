<template>
    <div id="app">
        <div class="row">
            <HeaderMenu/>
        </div>
        <div class="row mt-5">
            <div class="col-md-10 offset-1">
                <Slider v-bind:newsList="getSliderData()"/>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-7 offset-1">
                <NewsList v-bind:newsList="getLatestNewsListData()" title="LATEST NEWS"/>
            </div>
            <div class="col-md-3">
                <MatchList v-bind:latestMatchList="getLatestMatchListData()" v-bind:favouritesMatchList="getFavouriteMatchListData()" title="Football"/>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-7 offset-1">
                <NewsList v-bind:newsList="getFavouriteNewsListData()" title="FAVOURITE NEWS"/>
            </div>
            <div class="col-md-3">
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderMenu from "./components/HeaderMenu";
    import Slider from "./components/Slider";
    import News from "./models/News";
    import NewsList from "./components/NewsList";
    import Match from "./models/Match";
    import Team from "./models/Team";
    import Stadium from "./models/Stadium";
    import MatchList from "./components/MatchList";

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
                return [
                    new News(0, "emad", "kheyli khare", "background_test_1.jpg"),
                    new News(1, "amin", "gave nare", "background_test_2.jpg"),
                    new News(2, "alale", "dg nemidunam chi benevisam inja", "background_test_3.jpg"),
                    new News(3, "behnam", "yaran che gharibane", "background_test_4.jpg"),
                    new News(4, "elahe", "raftand az in khane", "background_test_5.jpg"),
                ]
            },

            getLatestNewsListData: function() {
                return [
                    new News(0, "Avalin khabar title esh", "description e avalin khabari ke title esho alan didin", "background_test_1.jpg"),
                    new News(1, "Dovomin khabar title esh", "description e avalin khabari ke title esho alan didin", "background_test_1.jpg"),
                    new News(2, "Sevomin khabar title esh", "description e avalin khabari ke title esho alan didin", "background_test_1.jpg"),
                ]
            },

            getFavouriteNewsListData: function() {
                return [
                    new News(0, "Avalin khabar title esh", "description e avalin khabari ke title esho alan didin", "background_test_1.jpg"),
                    new News(1, "Dovomin khabar title esh", "description e avalin khabari ke title esho alan didin", "background_test_1.jpg"),
                    new News(2, "Sevomin khabar title esh", "description e avalin khabari ke title esho alan didin", "background_test_1.jpg"),
                ]
            },

            getLatestMatchListData: function() {
                var homeTeam = new Team(0, "FC Barcelona", "Last Year UCL Winner", "background_test_1.jpg", new Date().getTime(), "FCB");
                var awayTeam = new Team(1, "Real Madrid", "Three Year In a Row UCL Winner", "background_test_1.jpg", new Date().getTime(), "RMD");
                return [
                    new Match(0, homeTeam, awayTeam, 2, 1, new Date().getTime(), new Stadium(), true, new Date().getTime()),
                    new Match(1, homeTeam, awayTeam, 4, 3, new Date().getTime(), new Stadium(), false, new Date().getTime()),
                    new Match(2, homeTeam, awayTeam, 0, 1, new Date().getTime(), new Stadium(), false, new Date().getTime()),
                ]
            },

            getFavouriteMatchListData: function() {
                var homeTeam = new Team(0, "FC Barcelona", "Last Year UCL Winner", "background_test_1.jpg", new Date().getTime(), "FCB");
                var awayTeam = new Team(1, "Real Madrid", "Three Year In a Row UCL Winner", "background_test_1.jpg", new Date().getTime(), "RMD");
                return [
                    new Match(0, homeTeam, awayTeam, 2, 1, new Date().getTime(), new Stadium(), true, new Date().getTime()),
                    new Match(1, homeTeam, awayTeam, 1, 1, new Date().getTime(), new Stadium(), false, new Date().getTime()),
                    new Match(2, homeTeam, awayTeam, 1, 4, new Date().getTime(), new Stadium(), false, new Date().getTime()),
                    new Match(2, homeTeam, awayTeam, 3, 3, new Date().getTime(), new Stadium(), false, new Date().getTime()),
                    new Match(2, homeTeam, awayTeam, 1, 2, new Date().getTime(), new Stadium(), false, new Date().getTime()),
                ]
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
