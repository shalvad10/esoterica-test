<script setup>
import { ref, onMounted } from 'vue';

const dropdownOpen = ref(false);
const currentDate = ref('');
const currentTime = ref('');

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const updateDateTime = () => {
  const now = new Date();
  currentDate.value = now.toLocaleDateString('en-GB');
  currentTime.value = now.toLocaleTimeString('en-GB', { hour12: false });
};

onMounted(() => {
  updateDateTime();
  setInterval(updateDateTime, 1000);
});
</script>

<template>
  <div class="bg-neutral-700 py-2">
    <div class="container px-4 mx-auto flex items-center justify-between">
      <!-- Navigation Links -->
      <nav class="flex space-x-4">
        <!-- <a href="#" class="text-white hover:text-amber-300">Main</a> -->
        <router-link to="/" class="text-white hover:text-amber-300">Main</router-link>
        <router-link to="/slots" class="text-white hover:text-amber-300">Slots</router-link>
        <router-link to="/games" class="pointer-events-none text-white opacity-20 hover:text-amber-300">Games</router-link>
        <router-link to="/promotions" class="pointer-events-none text-white opacity-20 hover:text-amber-300">Promotions</router-link>
        <router-link to="/about-us" class="pointer-events-none text-white opacity-20 hover:text-amber-300">About Us</router-link>
        <router-link to="/contact" class="pointer-events-none text-white opacity-20 hover:text-amber-300">Contact</router-link>
      </nav>

      <!-- Right Side: Language Selector & Date/Time -->
      <div class="flex items-center space-x-2">
        <!-- Date/Time -->
        <div class="flex items-center space-x-2 text-white md:none">
          <span>{{ currentDate }}</span>
          <span>{{ currentTime }}</span>
        </div>
        <div class="relative">
          <button @click="toggleDropdown" class="bg-transparent outline-none">
            <img src="../assets/united-states.png" alt="Language" class="h-5 w-5">
          </button>
          <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-32 z-10 bg-neutral-700 rounded shadow-lg">
            <a href="#" class="block px-4 py-2 text-gray-400 hover:text-amber-300">English</a>
            <a href="#" class="block px-4 py-2 pb-4 text-gray-400 hover:text-amber-300">ქართული</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.none {
  display: none;
}
</style>
