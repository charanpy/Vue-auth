<template>
  <section
    v-if="loading"
    class="
      font-serif
      fixed
      left-0
      top-0
      h-screen
      w-screen
      flex flex-col
      justify-center
      items-center
      text-lg text-gray-500
    "
  >
    {{ text }} ...
  </section>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    text: {
      type: String,
      default: 'Loading',
    },
  },
};
</script>

<style scoped>
section {
  background: rgba(0, 0, 0, 0.5);
  color: white;
}
</style>
