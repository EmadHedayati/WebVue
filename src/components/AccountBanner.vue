<template>
    <div class="row align-items-md-end round background">
        <img class="round image" :src="getImageUrl(account.image)">
        <div class="image-gradient">
        </div>
        <div class="row bottom">
            <div class="col-auto my-4 ml-4 align-self-end">
                <img class="circle account-image" :src="getImageUrl(account.image)"/>
            </div>
            <div class="col-md-8 my-4 align-self-center">
                <div class="row mb-2">
                    <div class="col">
                        <h2 class="h2 title text-white"><strong>{{account.title}}</strong></h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <span class="h6 text-white three-dot">{{account.description}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Account from "../models/Account";

    export default {
        name: 'AccountBanner',

        props: {
            account: Account
        },

        methods: {
            getImageUrl(url) {
                return require('../assets/' + url);
            }
        }
    }
</script>

<style scoped>
    .background {
        position: relative;
        height: 500px;
    }

    .image {
        object-fit: cover;
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .image-gradient {
        position: absolute;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        bottom: 0px;
        left: 0px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
        opacity: .6;
    }

    .title {
        font-weight: bold;
    }

    .bottom {
        position: absolute;
        width: 100%;
        bottom: 0px;
        left: 0px;
    }

    .account-image {
        border: 2px solid white;
        width: 130px;
        height: 130px;
    }

    .three-dot {
        display: inline-block;
        width: 100%;
        white-space: nowrap;
        overflow: hidden !important;
        text-overflow: ellipsis;
    }
</style>
