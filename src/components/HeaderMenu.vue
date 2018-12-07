<template>
    <div class="container-fluid background">
        <div class="row">
            <div class="col-md-10 offset-1">
                <div class="row align-items-center">
                    <div class="col-md-auto">
                        <span class="h5"><strong>NEWS</strong></span>
                        <span class="h6 text-muted"> | Football & Basketball</span>
                    </div>
                    <div class="col-md p-0">
                        <img class="m-3 header-icon float-right" src="../assets/logo.png">
                        <img class="m-3 header-icon float-right" src="../assets/logo.png">
                        <img class="m-3 header-icon float-right" src="../assets/logo.png">
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
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .background {
        -webkit-box-shadow: 0px 3px 28px -2px rgba(0, 0, 0, 0.23);
        -moz-box-shadow: 0px 3px 28px -2px rgba(0, 0, 0, 0.23);
        box-shadow: 0px 3px 28px -2px rgba(0, 0, 0, 0.23);
    }

    .header-icon {
        width: 30px;
        height: 30px;
    }

</style>
