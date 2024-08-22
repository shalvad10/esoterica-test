<script>
import SingleGame from './SingleGame.vue'
import GameFilters from './GameFilters.vue'
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';

export default {
  components: {
    GameFilters, SingleGame
  },
  computed: {
    ...mapState(['data']),
  },
  methods: {
    ...mapActions(['getGames']),
    ...mapGetters(['getData']),
    ...mapMutations(['SET_USER_DATA']),
    getGridItemClass(index) {
      // Example condition for changing size of specific grid items
      if (index === 0 || index === 3 || index == 4 || index == 9) {
        return 'row-span-2 col-span-2 '; // Larger grid item
      } else {
        return 'col-span-1 row-span-1'; // Regular size
      }
    },
  },
  mounted() {
    this.getGames();    
    const user = localStorage.getItem('user');
      if ( user !== null) {
        console.warn(JSON.parse(user));
        this.SET_USER_DATA(JSON.parse(user));
      }
  }
};

</script>

<template>
<GameFilters />
<div class="container m-auto grid grid-cols-1 gap-4 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
  <div v-for="(item,index) in getData()" :key="item.id" :class="getGridItemClass(index)">
    <SingleGame  :name="item.title" :imageUrl="item.imageUrl"/>
  </div>
</div>

  
</template>

<style scoped>

</style>
