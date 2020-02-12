<template>
    <div>
        <div class="bg-blue">{{dummyData}}</div>
    </div>
</template>

<script>
    // @ is an alias to /src
    export default {
        name: 'home',
        data() {
            return {
                dummyData: `this is the  财务应用Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`

            }
        }
    }
</script>
<style lang="css">
    @import "../../css/cm-style.css";

    .bg-blue {
        background: #00c4a7;
        width: 100%;
        height: 100%;
    }
</style>
