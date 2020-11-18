<template>
  <div class="wrapper">
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
  min-height: 100vh;
  overflow-x: hidden;
  background-image: url("https://cdn.pixabay.com/photo/2017/04/05/01/16/tropical-2203737_960_720.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
