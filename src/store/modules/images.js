import api from "../../api/api";
import { router } from '../../main'
// ^ import router file
const state = {
  images: [],
  faves: []
};
//WE CALL GETTERS TO RETRIEVE DATA
// You can think of them as computed
// properties for stores.
const getters = {
  allImages: (state) => state.images,
  allFaves: (state) => state.faves
};
// WE CALL ACTIONS TO CHANGE DATA BY CALLING MUTATIONS
const actions = {
  async fetchImages({rootState, commit}) {
      const {token} = rootState.auth;
      const response = await api.fetchImages(token)
      commit('setImages', response.data.data)
  },
  async fetchFaves({rootState, commit}) {
    const {token} = rootState.auth;
    const response = await api.fetchFaves(token)
   
    commit('setFaves', response.data.data)
},
  async uploadImages({rootState} ,images) {
    // get access token
    const { token } = rootState.auth;
    // call api module
    await api.upload(images, token)

    //redirect user to imagelist component
    router.push('/')
  }
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
  setFaves: (state, faves) => {
    state.faves = faves;
  }
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
