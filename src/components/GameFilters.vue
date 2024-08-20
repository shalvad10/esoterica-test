<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      selectedType: 'All'
    }
  },
  computed: {
    ...mapState(['gameTypes'])
  },
  methods: {
    ...mapMutations(['SET_TYPE']),
    handleClick(type) {
      this.selectedType = type;
      this.SET_TYPE(type);
    }
  }
};

</script>

<template>
  <div class="py-4">
    <div class="container px-4 mx-auto flex items-center justify-between">
      <!-- Navigation Links -->
      <nav class="flex space-x-4 text-xs">
        <a href="#" v-for="type in gameTypes" :key="type" :class="[selectedType == type ? 'text-amber-300' : 'text-black dark:text-white' ]" @click="handleClick(type)">{{type}}</a>
      </nav>
      </div>
    </div>
</template>

<style scoped>
</style>
