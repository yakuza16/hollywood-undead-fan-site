<template>
  <footer
    class="bg-gray-300 w-full absolute bottom-0 flex justify-center items-center h-auto border-t-2 border-teal-800
    "
  >
    <div class="flex py-4 w-full justify-evenly lg:mb-0 lg:justify-center">
      <div
        v-for="social in socials"
        :key="social.name"
        class="lg:mx-10 rounded-lg p-1"
      >
        <a :href="social.link">
          <g-image
            :src="
              require('!!assets-loader!~/assets/social_icons/' + social.icon)
            "
            :alt="social.name"
            class="w-10 h-10 border-2 border-teal-200 transition duration-300 ease-in-out bg-transparent rounded-md p-1 hover:bg-teal-400 hover:rounded-lg "
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    socials: {
      type: Array,
    },
  },
};
</script>

<style></style>
