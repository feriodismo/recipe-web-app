<template>

  <main class="fl-column content">

    <span class="fl-column welcome">

        <p>
            This is your new recipe app!
        </p>

        <p class='small-text'>

            With this new app you going to lorem ipsum, 
            dolor sit amet consectetur adipisicing elit. 
            Sint ipsum harum quasi ad cum dolore ipsa nihil illum pariatur accusamus! 
            Deleniti quibusdam et ducimus rem odit obcaecati odio totam dignissimos!

        </p>
        
        <router-link class="bs-button" 
        
          to="/dashboard">
          Start Here!
        
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