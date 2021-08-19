<template>

  <main class="fl-column content">

    <span class="fl-column welcome">

        <p>
            404 - Page not found! 
        </p>

        <p class='small-text'>
            Lorem ipsum, 
            dolor sit amet consectetur adipisicing elit. 
            Sint ipsum harum quasi ad cum dolore ipsa nihil illum pariatur accusamus! 
        </p>
        
        <router-link class="bs-button" 
        to="/">
          Home
        </router-link>

    </span>
    <Background />
  </main>

</template>

<script>
import Background from "../templates/Background.vue";
export default {
  name: 'Welcome',
  components: {
    Background
  }
}
</script>