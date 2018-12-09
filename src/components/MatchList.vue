<template>
    <div class="container-fluid fill-border">
        <div class="row mb-3 px-3 pt-4">
            <div class="col">
                <span class="h4 font-weight-bold">{{title}}</span>
            </div>
            <div class="col-auto align-self-md-end" v-if="!singleType">
                <span class="h6 cp" :class="[selected == 'Latest' ? 'text-info' : 'text-muted']"
                      @click="selectTab('Latest')"
                      v-text="'Latest'"></span>
                <span class="h6 font-weight-bold text-muted"> / </span>
                <span class="h6 cp" :class="[selected == 'Favourites' ? 'text-info' : 'text-muted']"
                      @click="selectTab('Favourites')"
                      v-text="'Favourites'"></span>
            </div>
        </div>
        <div class="row">
            <div class="col line"/>
        </div>
        <div class="row py-4">
            <MatchListItem v-for="item in latestMatchList"
                           :match="item"
                           :key="item.id"
                           v-show="selected == 'Latest'"/>
            <MatchListItem v-for="item in favouritesMatchList"
                           :match="item"
                           :key="item.id"
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
            singleType: Boolean,
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
</style>
