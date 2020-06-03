import Vuex from 'vuex'
import Vue from 'vue'
import auth from './modules/auth'
import images from './modules/images'


Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        // wires up auth module
        // vuex instance
        // which is hooked up to vue 
        //(above  -- Vue.use(Vuex))
        auth,
        images
    }
})