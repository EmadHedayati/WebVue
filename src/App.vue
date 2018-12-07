<template>
    <div id="app">
        <div class="row">
            <HeaderMenu/>
        </div>
        <div class="row">
            <div class="col-md-10 offset-1 mt-5">
                <Slider v-bind:list="getSliderData()"/>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderMenu from "./components/HeaderMenu";
    import Slider from "./components/Slider";

    export default {
        name: 'app',

        components: {
            Slider,
            HeaderMenu,
        },

        methods: {
            getSliderData: function() {
                return [
                    { id: 0, title: "emad", description: "kheyli khare", url: "background_test_1.jpg"},
                    { id: 1, title: "amin", description: "gave nare", url: "background_test_2.jpg"},
                    { id: 2, title: "alale", description: "dg nemidunam chi benevisam inja", url: "background_test_3.jpg"},
                    { id: 3, title: "behnam", description: "yaran che gharibane", url: "background_test_4.jpg"},
                    { id: 4, title: "elahe", description: "raftand az in khane", url: "background_test_5.jpg"},
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
