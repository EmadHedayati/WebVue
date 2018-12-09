<template>
    <div class="container-fluid slider">
        <SliderItem class="item"
                    v-for="(item, index) in newsList"
                    :news="item"
                    :key="index"
                    v-show="currentItem == index"/>
        <div class="col-md m-4 slider-circle-layout">
            <div class="float-right m-1" :class="[currentItem == index ? 'circle-active' : 'circle']"
                 v-for="(item, index) in newsList"
                 :key="index"
                 @click="showItem(index)"></div>
        </div>
    </div>
</template>

<script>
    import SliderItem from "./SliderItem";

    export default {
        name: 'Slider',

        components: {SliderItem},

        props: {
            newsList: Array,
        },

        data() {
            return {
                currentItem: 0
            }
        },

        mounted() {
            window.setInterval(() => {
                this.showNextItem();
            }, 5000);
        },

        methods: {
            showNextItem: function () {
                this.currentItem = (this.currentItem + 1) % this.newsList.length;
            },

            showItem: function (index) {
                this.currentItem = index;
            }
        }
    }
</script>

<style scoped>
    .slider {
        position: relative;
        height: 500px;
    }

    .item {
        position: absolute;
        width: 100%;
        height: 500px;
    }

    .slider-circle-layout {
        display: inline;
        position: absolute;
        right: 0px;
        bottom: 0px;
    }

    .circle-active {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        background: white;
    }

    .circle {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        border: 2px solid white;
    }
</style>
