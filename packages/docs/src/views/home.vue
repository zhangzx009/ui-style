<template>

    <main class="main">
        <div class="main-navi">1</div>
        <div class="sidebar">2</div>
        <div class="doc-content">3</div>
        <div class="device-view">
            <div class="screen"></div>
            <div class="screen-inside">
                <device-frame msg="Welcome to Your Vue.js App"/>
            </div>
        </div>
    </main>

</template>

<script>
    // @ is an alias to /src
    import DeviceFrame from '@/components/DeviceFrame.vue'

    export default {
        name: 'Home',
        components: {
            DeviceFrame
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
        grid-template-rows: 5rem auto;
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
        width: 435px;
        height: 1100px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        margin: 0 56px 0 26px;

    }

    .screen {
        position: absolute;
        pointer-events: none;
        height: 745px;
        width: 372px;
        background: url("../assets/iphoneX.png") no-repeat center 0;
        z-index: 10;
        top: 50px;
        left:30px;
     }
    .screen-inside{
        width: 312px;
        height: 698px;
        margin-left: 60px;
        margin-top: 50px;
      }

</style>
