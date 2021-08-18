<template>
  <div id="app">
    <Header />
    <div class="fl-column back-img">
    <router-view
      @wheel.prevent
      @touchmove.prevent
      @scroll.prevent />
    </div>

  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Header from './templates/Header.vue'



export default {
  name: 'App',
   components: {
    Header,
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans:wght@600&display=swap');
  @import './assets/styles/style.css';
</style>