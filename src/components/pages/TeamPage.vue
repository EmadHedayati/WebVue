<template>
    <div class="row mb-5">
        <div class="col-md-10 offset-1">
            <div class="row mx-0 mb-5">
                <div class="col">
                    <AccountBanner :account="team"/>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col">
                    <Table :table="matchList"/>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col">
                    <NewsList :newsList="latestNewsList" title="LATEST NEWS"/>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <Table :table="playerList"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NewsList from "../partials/NewsList";
    import Dummy from "../../utils/Dummy";
    import Table from "../Table";
    import AccountBanner from "../AccountBanner";

    export default {
        name: 'TeamPage',

        components: {
            AccountBanner,
            Table,
            NewsList,
        },

        props: {
            table: Table,
        },

        data() {
            return {
                team: {},
                latestNewsList: [],
                matchList: [],
                playerList: [],
            }
        },

        methods: {
            getTeamData: function () {
                this.team = Dummy.team();
            },

            getLatestNewsListData: function () {
                this.latestNewsList = Dummy.newsList(3);
            },

            getMatchListData: function () {
                this.matchList = Dummy.table(5, 3, 'team');
            },

            getPlayerListData: function () {
                this.playerList = Dummy.table(10, 5, 'player');
            },

            updateData() {
                this.getTeamData();
                this.getLatestNewsListData();
                this.getMatchListData();
                this.getPlayerListData();
            }
        },

        created: function() {
            this.updateData();
        },

        watch: {
            '$route' () {
                this.updateData();
            }
        },
    }
</script>

<style scoped>
</style>
