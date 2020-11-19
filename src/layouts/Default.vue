<template>
  <div
    class="wrapper bg-yellow-200 bg-opacity-75 min-h-screen bg-center bg-no-repeat bg-cover"
  >
    <div>
      <MenuMobile v-if="isDesktop < 1024" />
      <MenuDesktop v-else />
      <slot />
      <BaseFooter />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import MenuMobile from "../components/MenuMobile";
import MenuDesktop from "../components/MenuDesktop";
import BaseFooter from "../components/BaseFooter";
export default {
  components: {
    MenuMobile,
    MenuDesktop,
    BaseFooter,
  },
  data() {
    return {
      isDesktop: window.innerWidth,
    };
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler: function() {
      const xWidth = window.innerWidth;
      this.isDesktop = xWidth;
    },
  },
};
</script>

<style>
body {
  position: relative;
  overflow-x: hidden;
}

.wrapper {
  /* background-image: url("../../static/assets/main-background.jpg"); */
}
@media (min-width: 1024px) {
  .wrapper {
    /* background-image: url("../../static/assets/desktop-background.jpg"); */
  }
}
</style>
