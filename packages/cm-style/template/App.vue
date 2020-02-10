<template>
    <div id="app">
        <div class="scaffold">
        <div id="nav">
            <router-link to="/">Home</router-link> |
         </div>
        <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style lang="scss">
    #app {
        width: 375px;
        height: 812px;
        border: 1px dashed black;
        box-shadow: 5px 5px 5px grey;
    }
    .scaffold {

    }
</style>
