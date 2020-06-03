<template>
    <div class="dropper">
        <!-- by putting the dollar sign we  are telling vue we want
        the event object triggered by the specific event 'change' or whatever
        we specified. In vanilla js we obviously don't need to do this -->
       <input type="file" 
       @change="uploadImages($event.target.files)" 
       multiple
       accept="image/*"
       />
       <span>Drag files here!</span>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'UploadForm',
    methods: mapActions(['uploadImages'])
}
</script>
<style scoped>
.dropper{
    height: 30vh;
    border: 2px dashed black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.dropper:hover{
    background-color: #eee
}
input{
    width: 100%;
    height: 30vh;
    position: absolute;
    opacity: 0;
}
</style>