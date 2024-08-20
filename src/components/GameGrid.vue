<script>
import SingleGame from './SingleGame.vue'
import GameFilters from './GameFilters.vue'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';

export default {
  components: {
    GameFilters, SingleGame
  },
  computed: {
    ...mapState(['data']),
  },
  methods: {
    ...mapMutations(['increment', 'decrement']),
    ...mapActions(['getGames']),
    ...mapGetters(['getData'])
  },
  mounted() {
    this.getGames();
  }
};

</script>

<template>
<GameFilters />
<div class="container m-auto grid grid-cols-1 gap-4 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
  <SingleGame v-for="item in getData()" :key="item.id" :name="item.title" :imageUrl="item.imageUrl" />
</div>

  
</template>

<style scoped>

</style>
