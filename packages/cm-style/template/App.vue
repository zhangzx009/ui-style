<template>
    <div id="app">
        <div class="scaffold">
<!--        <div id="nav">-->
<!--            <router-link to="/">Home</router-link> |-->
<!--         </div>-->
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
    $top-safe-padding: 40px;
    $left-safe-padding: 1px;
    $right-safe-padding: 1px;
    $bottom-safe-padding: 20px;
    :root{
        --top-safe-aera: #{$top-safe-padding};
        --left-safe-aera: #{$left-safe-padding};
        --right-safe-aera: #{$right-safe-padding};
        --bottom-safe-aera: #{$bottom-safe-padding};
    }

    #app {
        width: 312px;
        height: 698px;


        /*margin-top: 26px;*/
        /*margin-left: 30px;*/
        /*border-radius: 30px;*/
        /*border: 1px dashed black;*/
        /*box-shadow: 5px 5px 5px grey;*/
    }
    .scaffold {
        /*
            scaffold provide page safe area for the layout
            -- define appBar (sticky) to the top
            -- define the bottomNavi
            -- define the floatButton
        */

        padding-top: var(--top-safe-aera);
        padding-bottom: var(--bottom-safe-aera);
        padding-left: var(--left-safe-aera);
        padding-right: var(--right-safe-aera);
    }
</style>
