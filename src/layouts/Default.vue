<template>
  <div>
    <MenuMobile v-if="isDesktop < 1024" />
    <MenuDesktop v-else-if="isDesktop > 1024" />

    <slot />
    <footer class="bg-gray-400 absolute bottom-0 w-full flex justify-center">
      Footer
    </footer>
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
export default {
  components: {
    MenuMobile,
    MenuDesktop,
  },
  data() {
    return {
      isDesktop: window.innerWidth,
    };
  },
};
</script>

<style>
body {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}
</style>
