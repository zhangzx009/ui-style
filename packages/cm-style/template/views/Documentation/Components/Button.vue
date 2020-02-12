<template>
    <div>{{this.$router.options.routes}}}</div>
</template>

<script>
    import router from '../../../router'
    export default {
        name: "ApiRoute",
        data(){
            return{}
         },
        beforeCreate() {
           // console.log(this.$router.options.routes)
        }
    }
</script>

<style scoped>

</style>
