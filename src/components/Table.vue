<template>
    <div class="table-responsive border table-height">
        <table class="table m-0">
            <thead>
            <tr>
                <th class="w-35 h4 font-weight-bold pt-4 pl-4 bottom-border"
                    v-text="table.colList[0]"></th>
                <th class="text-center h6 text-muted left-bottom-border"
                    v-for="(item, index) in table.colList.slice(1, table.colList.length)"
                    :key="index"
                    v-text="item"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(row, rowIndex) in table.rowList"
                :key="rowIndex">
                <th scope="row"
                    class="text-dark font-weight-normal pl-4 no-border"
                    :class="[rowIndex === 0 ? 'pt-4' : '', rowIndex === table.rowList.length - 1 ? 'pb-4' : '']">
                    <router-link :to="getRouterUrl(row[0])" tag="div" class="cp">
                        <div class="row">
                            <div class="col-auto py-0 px-2">
                                <img class="circle image ml-2" :src="getImageUrl(row[0].image)"/>
                            </div>
                            <div class="col py-0 pl-2 pr-4 align-items-start">
                                <span class="h6 text-dark font-weight-bold">{{row[0].title}}</span>
                            </div>
                        </div>
                    </router-link>
                </th>
                <td class="text-dark font-weight-normal text-center left-border"
                    :class="[rowIndex === 0 ? 'pt-4' : '', rowIndex === table.rowList.length - 1 ? 'pb-4' : '']"
                    v-for="(cell, cellIndex) in row.slice(1, row.length)"
                    :key="cellIndex"
                    v-text="cell"></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Table from "../models/Table";
    import Team from "../models/Team";
    import Player from "../models/Player";

    export default {
        name: 'Table',

        props: {
            table: Table,
        },

        methods: {
            getImageUrl(url) {
                return require('../assets/' + url);
            },

            getRouterUrl(account) {
                if (account instanceof Team)
                    return {name: 'team', params: {id: account.id}};
                if (account instanceof Player)
                    return {name: 'player', params: {id: account.id}};
            }
        },
    }
</script>

<style scoped>
    .table-height {
        max-height: 500px;
    }

    .w-35 {
        width: 35%;
    }

    .no-border {
        border: none;
    }

    .bottom-border {
        border-right: none;
        border-top: none;
        border-bottom: 1px solid #e2e2e2;
        border-left: none;
    }

    .left-border {
        border-right: none;
        border-top: none;
        border-bottom: none;
        border-left: 1px solid #e2e2e2;
    }

    .left-bottom-border {
        border-right: none;
        border-top: none;
        border-bottom: 1px solid #e2e2e2;
        border-left: 1px solid #e2e2e2;
    }

    .image {
        width: 20px;
        height: 20px;
    }
</style>
