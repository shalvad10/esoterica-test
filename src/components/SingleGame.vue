<script>
  import { ref } from 'vue';
  import Button from './Button.vue';
  import LoginModal from './LoginModal.vue';

  export default {
    components: {
      Button, LoginModal
    },
    data() {
      return {
        isModalVisible: ref(false)
      }
    },
    props: {      
      name:  {
        type: String,
        required: true,
      },
      imageUrl:  {
        type: String,
        required: true,
      },
    },
    methods: {
      onClick(address) {
        this.$router.push(address)
      },
      closeModal() {
        this.isModalVisible = false;
      },
      openModal() {
        this.isModalVisible = true;
      }
    }
  };
</script>

<template>
  <div class="group w-full relative mx-auto h-auto overflow-hidden rounded-lg">
    <div class="opacity-0 group-hover:opacity-100 duration-700 absolute inset-0 z-10 text-white font-semibold">
      <span> {{name}} </span>
    </div>
    <img :src="imageUrl" alt="image"
      class="w-full h-auto relative z-0 rounded-lg transition-all duration-700 group-hover:scale-110 group-hover:opacity-20">
      <Button class="btn opacity-0 group-hover:opacity-100 hover:scale-110" text="Play" @click="openModal" />
  </div>

  <LoginModal v-if="this.isModalVisible" :isVisible="this.isModalVisible" title="Authentication" @close="closeModal">
    <div>
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
          class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 mt-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button class="w-full bg-yellow-300 text-black p-2.5 mt-5 rounded-lg"> Login </button>

        <div class="relative flex py-5 items-center">
          <div class="flex-grow border-t border-gray-400"></div>
          <span class="flex-shrink mx-4 text-gray-400">OR</span>
          <div class="flex-grow border-t border-gray-400"></div>
        </div>

        <button class="w-full bg-green-600 text-white p-2.5 rounded-lg" @click="onClick('/register')">Register</button>
      </div>
  </LoginModal>

</template>

<style scoped>
  .btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    z-index: 10;
  }
</style>
