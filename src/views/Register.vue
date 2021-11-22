<template>
  <Auth @submit-form="log" />
</template>
<script>
import { mapActions } from 'vuex';
import Auth from '../components/Auth.vue';
// import useAlert from '../compositions/UseAlert';

export default {
  components: {
    Auth,
  },
  methods: {
    ...mapActions(['registerUser']),
    log(data) {
      console.log(data);
      this.registerUser(data);
    },
  },
};
</script>
