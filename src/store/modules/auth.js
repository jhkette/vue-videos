import api from '../../api/api'

// to change we will
// call an action function
// that will call a mutation function
const state = {
    token: null

}
const getters = {
    // implicit return
    // !!turns a value into a booolean  
    isLoggedin: (state) =>  !!state.token     

}

const actions = {
    login: () => {
        api.login()
       

    }, 
    // we always use commit as opposed to idk mutation.setToken
    logout: ({commit}) => {
        commit('setToken', null)
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