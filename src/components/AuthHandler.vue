<template>
    <div>
        Please wait...
    </div>
    
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'AuthHandler',
    methods: mapActions(['finalizeLogin']),
    // like componentDidMount() in REact 
    created(){
        this.finalizeLogin(window.location.hash)
    }
    
}
</script>

<style scoped>

</style>