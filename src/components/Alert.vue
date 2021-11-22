<template>
  <div
    v-if="alert.message"
    class="
      fixed
      top-0
      mx-auto
      inset-x-0
      w-auto
      p-6
      bg-red-500
      text-gray-700
      font-serif
      tex-base
      z-1000
    "
    :style="{ background: background }"
  >
    {{ alert.message }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: {
    error: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapGetters(['alert']),
    background() {
      return this.alert.type === 'error' ? '#EF4444' : '#10B981';
    },
  },
  methods: {
    ...mapActions(['removeAlert']),
  },
  watch: {
    alert: {
      handler(newVal) {
        if (newVal.message) {
          setTimeout(() => {
            this.removeAlert();
          }, 6000);
        }
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
div {
  color: white;
  text-align: center;
}
</style>
