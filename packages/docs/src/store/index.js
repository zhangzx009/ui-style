import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        deviceNavigation: ['button', 'column', 'navigation', 'card', 'scroller', 'tab','playground', 'mobiplayground'],
        currentActive: 'button'
    },
    mutations: {
        set_navi(state, naviName) {
            state.currentActive = naviName
        }
    },
    actions: {},
    modules: {}
})
