<template>
  <Auth login @submit-form="log" />
</template>

<script>
import { mapActions } from 'vuex';
import Auth from '../components/Auth.vue';

export default {
  components: {
    Auth,
  },
  methods: {
    ...mapActions(['loginUser']),
    log(data) {
      console.log(data);
      this.loginUser(data);
    },
  },
};
</script>

<style scoped></style>
