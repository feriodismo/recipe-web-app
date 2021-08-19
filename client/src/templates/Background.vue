<template>
  <img width="0" class="img-fluid" :src="src" v-on:load="onImgLoad"/>
</template>

<script>
    export default {
        name: 'Background',
        data(){
            return{
                src : require('../assets/images/large.jpg'),
                opacity : ''
            }
        },
        mounted(){
            this.checkWidth()
        },
        methods: {

        onImgLoad () {
            document.querySelector('.content').style.background = `rgba(0, 0, 0, ${this.opacity})`;
            document.querySelector('.back-img').style.backgroundImage = `url("${document.querySelector('.img-fluid').src}")`;
            setTimeout(function(){
              document.querySelector('.content').style.transition = "0.2s";
            }, 6000)
            },
        checkWidth(){
            if(window.innerWidth > 750){
            this.src = require('../assets/images/large.jpg');
            this.opacity = 0.5;
            }
            else{
            this.src = require('../assets/images/small.jpg')
            this.opacity = 0.8;
            }
            // this.onImgLoad();
        }
        }
    }
</script>