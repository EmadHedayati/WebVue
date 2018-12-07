<template>
    <div id="app">
        <div class="row">
            <HeaderMenu/>
        </div>
        <div class="row">
            <div class="col-md-10 offset-1 mt-5">
                <Slider v-bind:newsList="getSliderData()"/>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderMenu from "./components/HeaderMenu";
    import Slider from "./components/Slider";
    import News from "./models/News";

    export default {
        name: 'app',

        components: {
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
