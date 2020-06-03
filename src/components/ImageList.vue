<template>
    <div>
       
    <div v-if="isLoggedin" class="image-container">
    
       <img v-for="image in allImages" :src="image.link" :key="image.id" />
      
    </div>
    <h2 v-else> Please log in </h2>
    </div>
</template>

<script>
// have to import this as we are using an action
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'ImageList',
    methods: mapActions(['fetchImages']),
    created(){
        this.fetchImages();
    },
    // computed property to read information into component
    // these are going to use mapgetters as they retreive info
    computed: mapGetters(['allImages', 'isLoggedin'])

}
</script>
<style scoped>
.image-container{
    column-count: 3;
    column-gap: 0;

}
img{
    max-width: 100%;
    padding: 5px;
}

</style>