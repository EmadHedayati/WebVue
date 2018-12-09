<template>
    <div class="container-fluid slider">
        <div class="row mb-3">
            <div class="col p-0">
                <span class="h4 text-dark font-weight-bold">{{title}}</span>
            </div>
            <div class="col-auto p-0">
                <span class="h6 font-weight-bold text-info cp">View More</span>
            </div>
        </div>
        <div class="row">
            <LeagueListItem class="item my-2"
                            v-for="item in leagueList"
                            :league="item"
                            :key="item.id"/>
        </div>
    </div>
</template>

<script>
    import LeagueListItem from "./LeagueListItem";

    export default {
        name: 'LeagueList',

        components: {LeagueListItem},

        props: {
            leagueList: Array,
            title: String,
        },
    }
</script>

<style scoped>
</style>
