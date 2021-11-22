<template>
  <section class="flex flex-col justify-center items-center my-container">
    <div>
      <h1 class="text-3xl font-medium font-serif text-gray-700">{{ header }}</h1>
      <div class="my-4">
        <button class="px-2 py-2 text-white font-light text-base font-serif" @click="googleSignIn">
          {{ google }}
        </button>
      </div>
      <div class="flex items-center">
        <div class="w-2/4 h-0.5 bg-gray-400"></div>
        <p class="mx-1">OR</p>
        <div class="w-2/4 h-0.5 bg-gray-400"></div>
      </div>
      <form @submit.prevent="onSubmit">
        <div class="flex flex-col" v-if="!login">
          <label class="font-bold mb-2">Username</label>
          <input :class="[input]" type="text" placeholder="Username" ref="username" required />
        </div>
        <div class="flex flex-col">
          <label class="font-bold mb-2">Email</label>
          <input :class="[input]" type="email" placeholder="Email" ref="email" required />
        </div>
        <div class="flex flex-col">
          <label class="font-bold mb-2">Password</label>
          <input :class="[input]" type="password" placeholder="Password" ref="password" required />
        </div>
        <button
          type="submit"
          class="w-2/6 auth text-white font-serif text-center p-1.5 font-medium m-v-2"
        >
          {{ button }}
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import { input } from '../helpers/tailwindClass';

export default {
  data() {
    return {
      input,
    };
  },
  props: {
    login: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['submitForm'],
  computed: {
    google() {
      return `Sign ${this.login ? 'in' : 'up'} with Google`;
    },
    header() {
      return this.login ? 'Login to your Account' : 'Create your Account';
    },
    button() {
      return this.login ? 'Signin' : 'Signup';
    },
  },
  methods: {
    ...mapActions(['googleSignIn']),
    onSubmit() {
      const username = this.$refs?.username?.value;
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;
      console.log(username, email, password);
      this.$emit('submitForm', { username, email, password });
    },
  },
};
</script>

<style scoped>
button {
  border-radius: 4px;
  background-color: #1a73e8;
  width: 200px;
}

.auth {
  background-color: #ea4c89 !important;
  width: 40% !important;
}
</style>
