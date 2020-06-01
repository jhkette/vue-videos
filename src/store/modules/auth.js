import api from '../../api/api'
import qs from 'qs'

// https://vuex.vuejs.org/guide/modules.html
// FOr guide to VUEX

// to change we will
// call an action function
// that will call a mutation function
const state = {
    token: null

}
//WE CALL GETTERS TO RETRIEVE DATA
const getters = {
    // implicit return
    // !!turns a value into a booolean  
    isLoggedin: (state) =>  !!state.token     

}
// WE CALL ACTIONS TO CHANGE DATA
const actions = {
    login: () => {
        api.login()
       

    }, 
    // we always use commit as opposed to idk mutation.setToken
    logout: ({commit}) => {
        commit('setToken', null)
    },
    finalizeLogin({commit}, hash){
        const x = hash.replace('#', '')
        const query = qs.parse(x)
        commit('setToken', query.access_token)
        
    }

}

const mutations = {
    setToken: (state,token ) => {
        state.token = token
    }

}

// using es6 syntax here 
// key value pairs are the same
export default {
    state,
    getters,
    actions,
    mutations
}