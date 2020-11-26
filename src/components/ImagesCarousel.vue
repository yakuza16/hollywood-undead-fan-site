<template>
  <div>
    <carousel
      :autoplay="true"
      class="flex justify-items-center place-content-center"
    >
      <slide v-for="(image, index) in images" :key="index">
        <g-image
          :src="require('!!assets-loader!~/assets/members/' + image)"
          alt="Image of the Hollywood Undead member"
        />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      images: [
        "Johnny2.jpg",
        "Jdog2.jpg",
        "Charlie.jpg",
        "Danny2.jpg",
        "Charlie2.jpg",
        "Danny.jpg",
        "Funny.jpg",
        "Jdog.jpg",
        "Danny3.jpg",
        "Johnny.jpg",
        "Funny2.jpg",
      ],
    };
  },
};
</script>

<style></style>
