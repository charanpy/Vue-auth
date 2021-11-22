<template>
  <header>
    <nav class="flex px-8 justify-between items-center">
      <router-link to="/" :class="[active('/')]">
        <div class="flex items-center cursor-pointer">
          <img src="../assets/logo.png" class="w-8 h-8" />
          <h1 class="m-l-2 font-serif text-2xl font-medium">VueBlog</h1>
        </div>
      </router-link>
      <ul class="flex items-center">
        <li :class="[list, active('/blog')]">Blogs</li>
        <template v-if="!user">
          <li :class="[list, active('/login')]">
            <router-link to="/login">Login</router-link>
          </li>
          <li>
            <router-link to="/register">
              <button
                :class="[
                  `px-6 py-2 text-white ${
                    active('/register') || 'bg-blue-500'
                  } font-serif shadow-sm`,
                ]"
              >
                Signup
              </button>
            </router-link>
          </li>
        </template>
        <li :class="list" v-else @click="logout">Logout</li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { list } from '../helpers/tailwindClass';

export default {
  data() {
    return {
      list,
      route: '/',
    };
  },
  watch: {
    '$route.path': {
      handler(val) {
        this.route = val;
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    ...mapActions(['logout']),
    active(path) {
      let className = '';
      if (path === '/register' && path === this.route) {
        className += 'bg-green-500';
        return className;
      }
      if (path === this.route) className += 'text-green-600';
      return className;
    },
  },
};
</script>

<style scoped>
nav {
  min-height: 15vh;
}
button {
  border-radius: 5px;
}
</style>
