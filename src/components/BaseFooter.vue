<template>
  <footer
    class="bg-gray-500 w-full absolute bottom-0 flex justify-center items-center h-auto
    "
  >
    <div class="flex py-4 w-full justify-evenly lg:mb-0 lg:justify-center">
      <div v-for="social in socialMedias" :key="social.name" class="lg:mx-10">
        <a :href="social.link">
          <g-image
            :src="
              require('!!assets-loader!~/assets/social_icons/' + social.icon)
            "
            :alt="social.name"
            class="w-10 h-10"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
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

<style></style>
