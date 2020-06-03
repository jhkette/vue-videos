import api from "../../api/api";
import qs from "qs";
import { router } from '../../main'


// https://vuex.vuejs.org/guide/modules.html
// FOr guide to VUEX

// to change we will
// call an action function
// that will call a mutation function
const state = {
  token: window.localStorage.getItem('imgur_token')
};
//WE CALL GETTERS TO RETRIEVE DATA
// You can think of them as computed 
// properties for stores. 
const getters = {
  // implicit return
  // !!turns a value into a booolean
  isLoggedin: (state) => !!state.token,
};
// WE CALL ACTIONS TO CHANGE DATA BY CALLING MUTATIONS
const actions = {
  login: () => {
    api.login();
  },
  // we always use commit as opposed to idk mutation.setToken
  logout: ({ commit }) => {
    commit("setToken", null);
    window.localStorage.removeItem('imgur_token')
  },
  finalizeLogin({ commit }, hash) {
    const x = hash.replace("#", "");
    const query = qs.parse(x);
    commit("setToken", query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token)
    router.push('/')
  },
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};

// using es6 syntax here
// key value pairs are the same
// we export all these objects as a default object. It gets hooked up to index.
export default {
  state,
  getters,
  actions,
  mutations,
};
