<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">
      Image Storage
    </router-link>
   
    <div class="right menu">
   
    <div v-if="isLoggedin" class="horizontal">
      <router-link to="/" class="item">Galleries</router-link>
      <router-link to="/upload" class="item">Upload </router-link>
      <a class="item" @click="logout">Logout</a>
    </div>
    <!-- have to place immediately after v-if statement -->
      <a v-else href="#" class="ui item" @click="login">
        Login
      </a>
    </div>
  </div>
</template>
<script>

import { mapActions, mapGetters } from 'vuex';
export default {
  name: "AppHeader",
  // methods modify data
  // could do it like this, to slide mapactions into object
  // this way you can add other functions to methods
  // methods: {
  //   ...mapActions(['login']),
  //   onClick(){

  //   }
  // }
  methods: mapActions(['login', 'logout']),
  computed: mapGetters(['isLoggedin'])
};
</script>
<style scoped>
.horizontal {
  display: flex;
  
}
</style>
