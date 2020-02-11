<template>
    <iframe width="100%" height="100%" frameborder="1" scrolling="no" src="http://localhost:8989"></iframe>
</template>

<script>
    export default {
        name: 'DeviceFrame',
        props: {
            msg: String
        },
        data() {
            return {
                navigation: []
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    iframe{
         /*border-bottom-right-radius:30px;*/
         /*border-bottom-left-radius:30px;*/
        border-radius: 30px;
    }
</style>
