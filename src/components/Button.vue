<script setup>

defineProps({
  text: String,
})

</script>

<template>
<button class="before:ease relative h-12 w-40 overflow-hidden border border-yellow-300 bg-yellow-300 text-black shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-yellow-300 hover:before:-translate-x-40">
      <span relative="relative z-10">{{ text }}</span>
    </button>
</template>

<style scoped>

</style>
