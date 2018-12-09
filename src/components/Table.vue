<template>
    <div class="table-responsive  border mb-5">
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
                    :class="[rowIndex === 0 ? 'pt-4' : '', rowIndex === table.rowList.length - 1 ? 'pb-4' : '']"
                    v-text="row[0]"></th>
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

    export default {
        name: 'Table',

        props: {
            table: Table,
        },
    }
</script>

<style scoped>
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
</style>
