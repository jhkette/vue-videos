<template>
<div>
    <h1>Faves</h1>
    {{allFaves.length}}
    <p v-for="image in allFaves" :key="image.id" ><a :href="image.link">{{image.link}}</a></p>

   
</div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'FavesList',
    methods: mapActions(['fetchFaves']),
    created(){
        this.fetchFaves();
       
        
    },
    computed: mapGetters(['allFaves']), 
    
}
</script>
<style scoped>

</style>


