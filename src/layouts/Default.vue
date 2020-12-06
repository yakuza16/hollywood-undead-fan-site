<template>
  <div>
    <div>
      <MenuDesktop class="sm:hidden md:hidden lg:block" />
      <MenuMobile class="lg:hidden sm:block md:block" />
      <slot />
      <BaseFooter :socials="socialMedias" />
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
      socialMedias: [
        {
          name: "facebook",
          link: "https://www.facebook.com/hollywoodundead",
          icon: "facebook.svg",
        },
        {
          name: "instagram",
          link: "https://www.instagram.com/hollywoodundead",
          icon: "instagram.svg",
        },
        {
          name: "spotify",
          link: "https://open.spotify.com/artist/0CEFCo8288kQU7mJi25s6E",
          icon: "spotify.svg",
        },
        {
          name: "youtube",
          link: "https://www.youtube.com/user/HUofficial",
          icon: "youtube.svg",
        },
      ],
    };
  },
};
</script>

<style>
body {
  position: relative;
  overflow-x: hidden;
}
</style>
