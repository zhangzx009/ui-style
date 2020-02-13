<template>
    <div id="app">
        <div class="scaffold">
             <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App",
        beforeCreate() {
            // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
            let vh = window.innerHeight * 0.01;
            // Then we set the value in the --vh custom property to the root of the document
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
    }
</script>

<style lang="scss">
    :root {
        /* -------------------------------------------------------------------
            Assign the default/constant/env values to CSS variables
        */
        --safe-area-inset-top: 0px;
        --safe-area-inset-right: 0px;
        --safe-area-inset-bottom: 0px;
        --safe-area-inset-left: 0px;
    }

    #app {
        /* if the screen size bigger then the 600px*/
        @media only screen and (min-width: 600px) {
            height: 100vh; /* Use vh as a fallback for browsers that do not support Custom Properties */
            height: calc(var(--vh, 1vh) * 110);
            margin: 0 auto;
            max-width: 30%;
        }

        height: 100vh; /* Use vh as a fallback for browsers that do not support Custom Properties */
        height: calc(var(--vh, 1vh) * 100);
        margin: 0 auto;
        max-width: 100%;
        overflow: scroll;
        scroll-snap-padding-top: 20px;
    }

    @supports (padding: max(0px)) {
        .scaffold {
            /* -------------------------------------------------------------------
               Use the CSS variables in the max function
            */
            padding-top: max(40px, var(--safe-area-inset-left));
            padding-bottom: max(10px, var(--safe-area-inset-bottom));
            padding-left: max(5px, var(--safe-area-inset-left));
            padding-right: max(5px, var(--safe-area-inset-right));

            cursor: url("../assets/touch-cursor.png") 8 8 ,auto;
            background: #efeff4;
            color: #333333;

        }
    }

</style>
