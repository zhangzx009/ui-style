<template>
    <iframe id="mobile" width="100%" height="100%" frameborder="0" scrolling="no"
            :src= "routerLink"></iframe>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'DeviceFrame',
        props: {
            msg: String
        },
        data() {
            return {
                navigation: []
            }
        },
        computed: mapState(
            {
                routerLink: state => `http://localhost:8989/${state.currentActive}`
            })


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    iframe {
        /*border-bottom-right-radius:30px;*/
        /*border-bottom-left-radius:30px;*/
        border-radius: 30px;
    }
</style>
