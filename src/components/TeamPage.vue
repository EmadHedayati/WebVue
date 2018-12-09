<template>
    <div class="row">
        <div class="col-md-10 offset-1">
            <div class="row">
                <div class="col">
                    <Table :table="getTableData()"/>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <NewsList :newsList="getLatestNewsListData()" title="LATEST NEWS"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NewsList from "./NewsList";
    import Dummy from "../utils/Dummy";
    import Table from "./Table";

    export default {
        name: 'TeamPage',

        components: {
            Table,
            NewsList,
        },

        props: {
            table: Table,
        },

        methods: {
            getLatestNewsListData: function () {
                return Dummy.newsList(3);
            },

            getTableData: function () {
                return Dummy.table();
            }
        }
    }
</script>

<style scoped>
    .w-35 {
        width: 35%;
    }
</style>
