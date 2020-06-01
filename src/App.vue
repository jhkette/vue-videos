<template>
<div>
  <AppHeader></AppHeader>
  <!-- router view tells you where you want to show routed content
  chances are this will be on a root component ie app or layout component -->
  <router-view> </router-view>
</div>
</template>

<script>
import AppHeader from './components/AppHeader'


export default {
  name: 'App',
  components: {
    AppHeader
  }

}
</script>

<style>

</style>
