<script setup>
import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'


</script>

<template>
  <div class="flex flex-col min-h-screen">
    
    <div class="pt-4">
      <Header />
      <Navigation />
    </div>
    
    <main class="flex-1 p-4">
      <router-view />
    </main>
    
    <div>
      <Footer />
    </div>
  </div>
</template>

<style scoped>

</style>
