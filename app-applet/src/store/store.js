import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        pathName:'/home/index'
    },
    mutations:{
        changePathName(state,pathName){
            state.pathName = pathName
        }
    }
})