<template>
    <div class="container-fluid background">
        <div class="row m-0">
            <div class="col-md-10 offset-1">
                <div class="row align-items-center">
                    <router-link to="/" tag="div" class="cp">
                        <div class="col-md-auto p-0">
                            <span class="h5"><strong>NEWS</strong></span>
                            <span class="h6 text-muted"> | Football & Basketball</span>
                        </div>
                    </router-link>
                    <div class="col-md p-0">
                        <img class="my-3 ml-3 icon-size float-right" src="../assets/icons/baseline-person-24px.svg">
                        <router-link to="/league-list" tag="div" class="cp">
                            <img class="m-3 icon-size float-right" src="../assets/icons/baseline-search-24px.svg">
                        </router-link>
                        <img class="m-3 icon-size float-right" src="../assets/icons/baseline-home-24px.svg">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderMenu'
    }
</script>

<style scoped>
    .background {
        -webkit-box-shadow: 0px 3px 28px -2px rgba(0, 0, 0, 0.23);
        -moz-box-shadow: 0px 3px 28px -2px rgba(0, 0, 0, 0.23);
        box-shadow: 0px 3px 28px -2px rgba(0, 0, 0, 0.23);
    }
</style>
