<template>
  <div>
    <div>
      <MenuDesktop class="sm:hidden md:hidden lg:block" />
      <MenuMobile class="lg:hidden sm:block md:block" />
      <slot />
      <BaseFooter :socials="$static.allSocials.edges[0].node.socialMedias" />
    </div>
  </div>
</template>

<static-query>
query {
allSocials {
  edges {
    node {
      socialMedias {
        name
        link
        icon
      }
    }
  }
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
