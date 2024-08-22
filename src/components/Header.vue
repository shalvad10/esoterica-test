<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex';
  import { ref } from 'vue';

  export default {
    data() {
      return {
        menuDropdown: ref(false),
        cashierDropdown: ref(false),
        username: ref(''),
        password: ref('')
      }
    },
    computed: {
      ...mapGetters(['isAuthenticated', 'getUser'])
    },
    methods: {
      ...mapActions(['authenticateUser','userBalance']),
      ...mapMutations(['SET_USER_DATA']),
      toggleDropdown(type) {
        switch (type) {
          case 'menu':
          this.menuDropdown = !this.menuDropdown;
            break;
          case 'cashier':
            if (!this.getUser.balance) {
              this.userBalance({ username: this.getUser.username });
            }
          this.cashierDropdown = !this.cashierDropdown;
            break;
        }
      },
      onClick(address) {
        this.$router.push(address)
      },
      login() {
          const payload = { username: this.username, password: this.password };
          this.authenticateUser(payload);
      },
      logout() {
        this.SET_USER_DATA(null);
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
        @click="toggleDropdown('menu')" 
        class="bg-sky-500 hover:bg-sky-600 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-2.5 rounded-lg"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <div 
        v-if="this.menuDropdown" 
        class="absolute z-10 left-0 top-full mt-2 w-full bg-white border-gray-300 dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg p-4 space-y-4"
      >
        <input 
          v-model="this.username"
          type="text" 
          id="username-dropdown" 
          placeholder="Username"
          class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <input 
          v-model="this.password"
          type="password" 
          id="password-dropdown" 
          placeholder="Password" 
          class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button class="w-full bg-green-500 text-white p-2.5 rounded-lg" @click="login()"> Login </button>
        <button class="w-full bg-blue-500 text-white p-2.5 rounded-lg" @click="onClick('/register')">Register</button>
      </div>
    </div>

    <!-- Inline Layout for Larger Screens -->
    <div  v-if="!isAuthenticated" id="loginForm" class="hidden md:flex flex-row items-center space-x-4">
      <button class="h-12 bg-green-500 text-white p-2.5 px-8 rounded-lg hover:bg-green-400" @click="onClick('/register')">
        Register
      </button>
      <input
        v-model="this.username"
        type="text" 
        id="username" 
        placeholder="Username" 
        class="h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input 
        v-model="this.password"
        type="password"
        id="password" 
        placeholder="Password" 
        class="h-12 bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button class="h-12 bg-yellow-300 text-black p-2.5 px-4 rounded-lg hover:bg-yellow-500" @click="login()">
        Login
      </button>
    </div>

    <div v-if="isAuthenticated" id="loginForm" class="hidden md:flex flex-row items-center space-x-4 relative">
      <button class="h-12 bg-green-500 text-white py-2.5 px-8 rounded-lg" @click="toggleDropdown('cashier')">
        Cashier
      </button>
      <div
        v-if="this.cashierDropdown && this.getUser.balance"
        class="absolute right-[30px] top-[45px] mt-2 w-48 bg-neutral-600 rounded-md shadow-lg z-20"
      >
        <div class="px-4 py-2 border-b border-gray-500">
          <span class="font-semibold text-gray-300">Username: </span> <span class="text-white ml-1">{{ getUser.username }}</span>
        </div>
        <div class="px-4 py-2">
          <span class="font-semibold text-gray-300">Balance: </span> <span class="text-white ml-1">{{ getUser.balance.cash + ' ' + getUser.balance.currencyCode }}</span>
        </div>
      </div>
      <button class="h-12 bg-red-700 text-white py-2.5 px-4 rounded-lg" @click="logout()">
        Logout
      </button>
    </div>
  </div>
</template>



<style scoped>
</style>
