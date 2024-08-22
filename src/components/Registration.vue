<script>
    import { mapState, mapMutations, mapActions } from 'vuex';
    import { ref } from 'vue';

    export default {
    data() {
        return {
            username: ref(''),
            fullname: ref(''),
            password: ref(''),
            confirmPassword: ref(''),
            referralCode: ref(''),
            passwordError: ref('')
        }
    },
    methods: {
        ...mapActions(['registerUser']),
        register() {
            if (!this.checkPasswords()) {
                return;
            }
            const payload = {
                username: this.username,
                password: this.password,
                referralCode: this.referralCode,
            };
            console.warn(payload)
            this.registerUser(payload);
        },
        checkPasswords() {
            if (this.password !== this.confirmPassword) {
                this.passwordError = 'Passwords do not match!';
                return false;
            }
            this.passwordError = '';
            return true;
        }
    }
    };
</script>

<template>
  <div class="flex flex-col items-center justify-center px-6 py-9 mx-auto">
      <div class="w-full bg-white border-gray-300 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-neutral-700 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <form class="space-y-4 md:space-y-6"  @submit.prevent="register">
                  <div>
                      <label for="username-reg" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                      <input type="text" v-model="this.username" name="username" id="username-reg" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required="">
                  </div>
                  <div>
                      <label for="password-reg" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" v-model="this.password" name="password" id="password-reg" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <div>
                      <label for="confirm-password-reg" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="password" v-model="this.confirmPassword" name="confirm-password" id="confirm-password-reg" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <div>
                      <label for="fullName-reg" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                      <input type="text" v-model="this.fullname" name="fullName" id="fullName-reg" placeholder="full name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <div>
                      <label for="referalCode-reg" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Referal code</label>
                      <input type="text" v-model="this.referralCode" name="referalCode" id="referalCode-reg" placeholder="referal code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-neutral-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-amber-300 hover:underline dark:text-primary-500" href="javascript:;">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" class="w-full text-black bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
              </form>
          </div>
      </div>
  </div>

</template>

<style scoped>

</style>
