<template>
  <main class="fl-column content dashboard">
     
      <input v-on:input="getInput" type="text" placeholder="search for recipes by text input" class="search-bar"/>
      <span v-on:click="toggleFilters" class="fl-row tags-toggle">filter by ingredients</span>
      <ul class="fl-row tags-wrap">
            
            <li v-on:click="selectFilter"
            v-for=" ingredient of ingredients "
            v-bind:key=" ingredient ">
            
            {{ ingredient }}
            
            </li>

      </ul>
      <div class="fl-row list-wrap">

        <ul class="fl-column list-content" 
            
            v-for=" ( recipe, i ) in recipes " 
            v-bind:key=" i ">

            <span v-on:click="toggleIngredients" class="fl-column list-title">
                {{ recipe.title }}
            </span>

            <span class="fl-column list-ingredients-wrap">
                <p class="fl-column">INGREDIENTS:</p>
                <li class="fl-row list-ingredients" 
                    v-for=" ( ingredient , ii ) in recipe.ingredients " 
                    v-bind:key=" ii ">

                    <span class="list-li-icon"></span>{{ ingredient }}

                </li>

            </span>

        </ul>

      </div>

  </main>
</template>

<script>

import data from "../assets/data.json";

export default {
  name: 'Dashboard',
  components: {
  },
  data() {
      return {
          data:data,
          recipes: data,
          ingredients: [],
          filters: [],
          searchValue: ""
      }
  },
  methods: {
      
      // Search input listener callback
      getInput(e){
          this.searchValue = e.target.value.toLowerCase();
          this.search();
      },

      // Search by input+filters logic, updating "recipes" array
      search(){
          this.recipes = [];
          for(let iterator in data){
                if(data[iterator].title.toLowerCase().includes(this.searchValue)){
                    for(let ii in data[iterator].ingredients){
                        if(this.filters.length == 0 || this.filters.indexOf(data[iterator].ingredients[ii]) !== -1){
                            this.recipes.push(data[iterator]);
                            break;
                        }
                    }
                }
          }
      },

      toggleIngredients(e){
          e.target.nextSibling.style.display == "flex" ? e.target.nextSibling.style.display = "none" : e.target.nextSibling.style.display = "flex";
      },

      toggleFilters(e){
          e.target.nextSibling.style.display == "flex" ? e.target.nextSibling.style.display = "none" : e.target.nextSibling.style.display = "flex";
      },

      // Selection of filter logic, updating the "filter" array
      selectFilter(e){
        if(this.filters.indexOf(e.target.outerText) !== -1){
            this.filters.splice(this.filters.indexOf(e.target.outerText), 1);
            e.target.style.background = "transparent";
            e.target.style.color = "white";
        }else{
            this.filters.push(e.target.outerText)
            e.target.style.background = "white";
            e.target.style.color = "black";
        }
        this.search();
      },

      // Function that get unique ingredients for recipe data
      getIngredients(){
          let ingredientsColection = []
          for(let i in data){
            for(let ii in data[i].ingredients){
                ingredientsColection.push(data[i].ingredients[ii]);
            }
          }
          return [... new Set(ingredientsColection)]
      }

  },
  mounted () {
      this.ingredients = this.getIngredients();
  }
}
</script>