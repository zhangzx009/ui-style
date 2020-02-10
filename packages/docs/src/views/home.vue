<template>
    <div class="home">
        <main class="main">
            <div class="main-navi">1</div>
            <div class="sidebar">2</div>
            <div class="doc-content">3</div>
            <div class="device-view">
                <div class="screen">
                    <HelloWorld msg="Welcome to Your Vue.js App"/>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        components: {
            HelloWorld
        }
    }
</script>
<style lang="css">
    :root {

    }

    .main {
        border: black 1px solid;
        display: grid;
        margin: 0 2em;
        grid-template-columns: 2fr 6fr 4fr;
        grid-template-rows: 3rem auto;
        grid-template-areas: "topnavi topnavi device" "sidebar content device" "sidebar content device"
    }

    .main-navi {
        grid-area: topnavi;
        background: lightblue;
    }

    .sidebar {
        grid-area: sidebar;
        background: lightcyan;

    }

    .doc-content {
        grid-area: content;
        background: lightgray;
    }

    .device-view {
        grid-area: device;
        background: azure;
        position: relative;
        width: 330px;
        height: 645px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        margin: 0 56px 0 26px;
        background: url("../assets/iphoneX.38c8778.png") no-repeat center 0;
        background-size: 100%;
    }
    .screen{

      position: absolute;
      width: 285px;
      height: 540px;
      left: 20px;
      top:63px;
    }
</style>
