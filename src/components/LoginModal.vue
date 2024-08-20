<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: 'Title'
  }
});

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};
</script>

<template>
  <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
    <div class=" bg-white border-gray-300 dark:bg-neutral-700 dark:border-gray-700 p-4 rounded-lg shadow-lg max-w-md w-full">
      <header class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold">{{ title }}</h3>
        <button @click="close" class="bg-transparent text-white text-lg hover:border-transparent">&times;</button>
      </header>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
