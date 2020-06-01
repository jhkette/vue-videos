import Vue from 'vue'
import App from './App.vue'
import store from './store'



new Vue({
  // could do store: store but es6 make this unnessacary,
  store,
  render: h => h(App),
}).$mount('#app')
