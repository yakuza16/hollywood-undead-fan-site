<template>
  <ClientOnly>
    <carousel
      :autoplay="true"
      :perPageCustom="[[320, 1], [1024, 2]]"
      :paginationPadding="10"
      :paginationSize="14"
      paginationActiveColor="#3384ce"
      paginationColor="#80e5d9"
      class="flex justify-items-center place-content-center"
    >
      <slide v-for="(image, index) in images" :key="index">
        <g-image
          :src="require('!!assets-loader!~/assets/members/' + image)"
          alt="Image of the Hollywood Undead member"
        />
      </slide>
    </carousel>
  </ClientOnly>
</template>

<script>
export default {
  components: {
    Carousel: () =>
      import("vue-carousel")
        .then((m) => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel")
        .then((m) => m.Slide)
        .catch(),
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
