<template>
  <div>
    <button @click="scrollToTop" class="scrollTop w-12 h-12"></button>
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

<style>
.scrollTop {
  background-image: url("../../static/assets/up-arrow.svg");
  transform: rotate(90deg);
  transition: transform 0.6s ease-in-out;
}

.scrollTop:hover {
  transform: rotate(360deg);
}
</style>
