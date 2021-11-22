<template>
  <TheHeader></TheHeader>
  <Alert />
  <LoaderVue :loading="loading" />
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import { onAuthStateChanged } from 'firebase/auth';

import { mapActions, mapGetters } from 'vuex';
import Alert from './components/Alert.vue';
import LoaderVue from './components/Loader.vue';
import TheHeader from './components/TheHeader.vue';
import { auth } from './firebase/firebaseinit';

export default {
  name: 'App',
  components: {
    TheHeader,
    Alert,
    LoaderVue,
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.userSubscription({
          email: user.email,
          username: user.displayName,
          id: user.uid,
        });
        this.$router.push('/');
        return true;
      }
      return this.userSubscriptionError();
    });
  },
  computed: {
    ...mapGetters(['user', 'loading']),
  },
  methods: {
    ...mapActions(['userSubscription', 'userSubscriptionError']),
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.my-container {
  min-height: 85vh;
}
</style>
