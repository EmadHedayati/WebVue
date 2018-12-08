<template>
    <div class="container-fluid background">
        <div class="row mb-3 px-3 pt-4">
            <div class="col">
                <span class="h4 text-dark font-weight-bold">{{title}}</span>
            </div>
            <div class="col-auto align-items-end">
                <span v-bind:class="['h6', selected == 'Latest' ? 'text-info' : 'text-muted']"
                      v-on:click="selectTab('Latest')"
                      v-text="'Latest'"/>
                <span class="h6 font-weight-bold text-muted"> / </span>
                <span v-bind:class="['h6', selected == 'Favourites' ? 'text-info' : 'text-muted']"
                      v-on:click="selectTab('Favourites')"
                      v-text="'Favourites'"/>
            </div>
        </div>
        <div class="row">
            <div class="col line"/>
        </div>
        <div class="row py-4">
            <MatchListItem v-for="item in latestMatchList"
                           v-bind:match="item"
                           v-bind:key="item.id"
                           v-show="selected == 'Latest'"/>
            <MatchListItem v-for="item in favouritesMatchList"
                           v-bind:match="item"
                           v-bind:key="item.id"
                           v-show="selected == 'Favourites'"/>
        </div>
    </div>
</template>

<script>
    import MatchListItem from "./MatchListItem";

    export default {
        name: 'MatchList',

        components: {MatchListItem},

        props: {
            latestMatchList: Array,
            favouritesMatchList: Array,
            title: String,
        },

        data() {
            return {
                selected: 'Latest'
            }
        },

        methods: {
            selectTab: function (tab) {
                this.selected = tab;
            }
        }
    }
</script>

<style scoped>
    .background {
        background: #ededed;
        border-radius: 10px;
    }

    .line {
        border: 1px solid #e2e2e2;
    }
</style>
