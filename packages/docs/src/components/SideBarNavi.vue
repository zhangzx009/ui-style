<template>
    <div>
        <nav class="navbar navbar-light bg-light flex-column">
             <ul v-for="link in routerLink" :key="link.index">
                <li class="nav nav-link btn" @click="mobileRoutehandler(link)">{{link}}</li>
            </ul>
        </nav>
    </div>


</template>

<script>
    import {mapActions, mapState, mapMutations} from 'vuex'

    export default {
        name: "SideBarNavi",
        computed: mapState(
            {
                 routerLink: state => state.deviceNavigation,
                 currentNavi: state=>state.currentActive
            }
        ),
        methods: {
             mobileRoutehandler(naviName){
                  this.$store.commit("set_navi", naviName)
             }
        }
    }
</script>

<style scoped>

</style>
