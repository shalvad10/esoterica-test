<script>
import { mapState, mapMutations } from 'vuex';
import { ref } from 'vue';

export default {
  data() {
    return {
      selectedType: ref('All'),
      isDropdownOpen: (ref)
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
    },
    toggleDropdown() {
      isDropdownOpen.value = !isDropdownOpen.value;
    },
    onClick(address) {
      this.$router.push(address)
    }
  }
};

</script>

<template>
  <div class="flex flex-col md:flex-row justify-between items-center w-full p-4">
      <!-- Logo Section -->
        <img src="../assets/esoterica_logo.svg" alt="Esoterica Logo" class="h-10">

    <!-- Dropdown for Mobile Devices -->
    <div class="relative md:hidden w-full flex justify-end">
      <button 
        @click="toggleDropdown" 
        class="bg-sky-500 hover:bg-sky-600 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-2.5 rounded-lg"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <div 
        v-if="isDropdownOpen" 
        class="absolute left-0 top-full mt-2 w-full bg-white border-gray-300 dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg p-4 space-y-4"
      >
        <input 
          type="text" 
          id="username" 
          placeholder="Username" 
          class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <input 
          type="password" 
          id="password" 
          placeholder="Password" 
          class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button class="w-full bg-green-500 text-white p-2.5 rounded-lg"> Login </button>
        <button class="w-full bg-blue-500 text-white p-2.5 rounded-lg" @click="onClick('/register')">Register</button>
      </div>
    </div>

    <!-- Inline Layout for Larger Screens -->
    <div  v-if="true" id="loginForm" class="hidden md:flex flex-row items-center space-x-4">
      <button class="h-12 bg-green-500 text-white p-2.5 px-8 rounded-lg hover:bg-green-600" @click="onClick('/register')">
        Register
      </button>
      <input 
        type="text" 
        id="username" 
        placeholder="Username" 
        class="h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input 
        type="password"
        id="password" 
        placeholder="Password" 
        class="h-12 bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button class="h-12 bg-yellow-300 text-black p-2.5 px-4 rounded-lg hover:bg-yellow-500">
        Login
      </button>
    </div>

    <div v-if="false" id="loginForm" class="hidden md:flex flex-row items-center space-x-4">
      <button class="h-12 bg-green-500 text-white py-2.5 px-8 rounded-lg">
        Cashier
      </button>
      <button class="h-12 bg-red-700 text-white py-2.5 px-4 rounded-lg">
        Logout
      </button>
    </div>
  </div>
</template>



<style scoped>
</style>
