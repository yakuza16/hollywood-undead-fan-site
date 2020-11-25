<template>
  <div>
    <carousel
      :autoplay="true"
      class="flex justify-items-center place-content-center"
    >
      <slide>
        <g-image
          src="../../static/assets/members/Johnny2.jpg"
          alt="Johhny 3 Tears"
        />
      </slide>
      <slide>
        <g-image src="../../static/assets/members/Jdog2.jpg" alt="J-Dog" />
      </slide>
      <slide>
        <g-image
          src="../../static/assets/members/Charlie.jpg"
          alt="Charlie Scene singing"
        />
      </slide>
      <slide>
        <g-image
          class="h-44"
          src="../../static/assets/members/Danny2.jpg"
          alt="Danny Rose singing"
        />
      </slide>
      <slide>
        <g-image
          src="../../static/assets/members/Charlie2.jpg"
          alt="Charlie Scene singing"
        />
      </slide>
      <slide>
        <g-image
          src="../../static/assets/members/Danny.jpg"
          alt="Danny singing"
        />
      </slide>
      <slide>
        <g-image
          src="../../static/assets/members/Funny.jpg"
          alt="Funny Man singing"
        />
      </slide>
      <slide>
        <g-image
          src="../../static/assets/members/Jdog.jpg"
          alt="J-Dog singing"
        />
      </slide>
      <slide>
        <g-image
          src="../../static/assets/members/Danny3.jpg"
          alt="Danny Rose Murillo"
        />
      </slide>
      <slide>
        <g-image
          src="../../static/assets/members/Johnny.jpg"
          alt="Johhny 3 Tears"
        />
      </slide>
      <slide>
        <g-image
          src="../../static/assets/members/Funny2.jpg"
          alt="Funny Man singing"
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
};
</script>

<style></style>
