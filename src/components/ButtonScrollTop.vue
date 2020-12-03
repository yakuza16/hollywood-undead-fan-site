<template>
  <div>
    <button @click="scrollToTop">Back to top</button>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop: () => {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style></style>
