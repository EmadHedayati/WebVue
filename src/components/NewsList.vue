<template>
    <div class="container-fluid slider">
        <div class="row mb-3">
            <div class="col p-0">
                <span class="h4 text-dark font-weight-bold">{{title}}</span>
            </div>
            <div class="col-auto p-0">
                <span class="h6 font-weight-bold text-info">View More</span>
            </div>
        </div>
        <div class="row">
            <NewsListItem class="item my-2"
                          v-for="item in newsList"
                          v-bind:news="item"
                          v-bind:key="item.id"/>
        </div>
    </div>
</template>

<script>
    import NewsListItem from "./NewsListItem";

    export default {
        name: 'NewsList',

        components: {NewsListItem},

        props: {
            newsList: Array,
            title: String,
        },

        data() {
            return {
                currentItemId: 0
            }
        },
    }
</script>

<style scoped>
</style>
