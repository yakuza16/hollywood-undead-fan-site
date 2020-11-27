<template>
  <div class="bg-blue-200 min-h-screen bg-center bg-no-repeat bg-cover">
    <div>
      <MenuDesktop class="sm:hidden md:hidden lg:block" />
      <MenuMobile class="lg:hidden sm:block md:block" />
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
};
</script>

<style>
body {
  position: relative;
  overflow-x: hidden;
}
</style>
