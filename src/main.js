import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import AuthHandler from './components/AuthHandler'
import ImageList from './components/ImageList.vue'
import UploadForm from './components/UploadForm.vue'
import FavesList from './components/FavesList.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
  // use browserrouter as opposed to hash router
  // ie only look at url after domain. Hash router looks
  // after hash
  mode: 'history',
  routes: [
    {path: '/oauth2/callback', component: AuthHandler },
    {path: '/', component: ImageList, },
    {path: '/upload', component: UploadForm, },
    {path: '/favourites', component: FavesList, },

  ]
})

new Vue({

  // could do store: store, and router: router but es6 make this unnessacary,
  store, // add store to vue instance
  router, // add router to vue instance
  render: h => h(App),
}).$mount('#app')
