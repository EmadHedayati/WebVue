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
                <NewsList v-bind:newsList="getLatestNewsData()" title="LATEST NEWS"/>
            </div>
            <div class="col-md-3" style="border-radius: 10px; background: #d5d5d5">
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-7 offset-1">
                <NewsList v-bind:newsList="getLatestNewsData()" title="FAVOURITE NEWS"/>
            </div>
            <div class="col-md-3" style="border-radius: 10px; background: #d5d5d5;">
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderMenu from "./components/HeaderMenu";
    import Slider from "./components/Slider";
    import News from "./models/News";
    import NewsList from "./components/NewsList";

    export default {
        name: 'app',

        components: {
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

            getLatestNewsData: function() {
                return [
                    new News(0, "Avalin khabar title esh", "description e avalin khabari ke title esho alan didin", "background_test_1.jpg"),
                    new News(1, "Dovomin khabar title esh", "description e avalin khabari ke title esho alan didin", "background_test_1.jpg"),
                    new News(2, "Sevomin khabar title esh", "description e avalin khabari ke title esho alan didin", "background_test_1.jpg"),
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
