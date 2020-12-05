<template>
  <Layout>
    <div class="flex flex-col justify-center place-items-center mx-4 mt-4">
      <section
        class=" mt-5 mb-32 flex flex-col justify-items-center place-content-center text-center"
      >
        <h1 class="text-2xl font-bold m-5 lg:text-4xl">
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-900"
            >Hollywood Undead band members</span
          >
        </h1>
        <div>
          <ImagesCarousel />
        </div>
        <article class="w-3/4 m-auto my-4 text-lg lg:text-xl xl:text-2xl">
          <ul class="w-1/2 m-auto">
            <li
              v-for="member in bandMembers"
              :key="member.pseudonim"
              class="my-5 border-b-4 py-6 rounded-xl
                transition duration-500 ease-in-out hover:border-gray-900 border-opacity-50
              lg:hover:bg-blue-300 "
            >
              <p class="my-3">
                Stage name:
                <strong>
                  <g-link :to="member.page">{{ member.pseudonim }}</g-link>
                </strong>
              </p>
              <p class="my-3">Real name: {{ member.realName }}</p>
              <p class="my-6">Age: {{ member.age }}</p>
              <div class="flex justify-center my-5">
                <g-link :to="member.page"
                  ><g-image
                    @mouseover="member.index++"
                    @mouseleave="member.index--"
                    :src="
                      require('!!assets-loader!~/assets/masks/' +
                        member.images[member.index])
                    "
                    :alt="member.pseudonim"
                    class=" rounded-full cursor-pointer w-32 h-32 ownImg"
                /></g-link>
              </div>
            </li>
          </ul>
        </article>
        <ButtonScrollTop />
      </section>
    </div>
  </Layout>
</template>

<script>
import ImagesCarousel from "../components/ImagesCarousel";
import ButtonScrollTop from "../components/ButtonScrollTop";
export default {
  metaInfo: {
    title: "Hollywood Undead Members",
    meta: [
      {
        content:
          "Charlie Scene, J-Dog, Johnny 3 Tears, J3T, Funny Man, Danny, Daniel Rose Murillo, ",
      },
    ],
  },
  components: {
    ImagesCarousel,
    ButtonScrollTop,
  },
  data() {
    return {
      bandMembers: [
        {
          pseudonim: "Johnny 3 Tears",
          realName: "George Arthur Ragan",
          age: this.calculateAge(1981),
          images: ["JohhnyMask.jpg", "smallJohnny.png"],
          index: 0,
          page: "/members/johnny-three-tears/",
        },
        {
          pseudonim: "Charlie Scene",
          realName: "Jordon Kristopher Terrell",
          age: this.calculateAge(1985),
          images: ["charlieMask.jpg", "smallCharlie.png"],
          index: 0,
          page: "/members/charlie-scene/",
        },
        {
          pseudonim: "J-Dog",
          realName: "Jorel Decker",
          age: this.calculateAge(1984),
          images: ["JdogMask.jpg", "smallJDog.png"],
          index: 0,
          page: "/members/j-dog/",
        },
        {
          pseudonim: "Funny Man",
          realName: "Dylan Alvarez",
          age: this.calculateAge(1986),
          images: ["funnyMask.jpg", "smallFunny.png"],
          index: 0,
          page: "/members/funny-man/",
        },
        {
          pseudonim: "Danny",
          realName: "Daniel Rose Murillo",
          age: this.calculateAge(1982),
          images: ["DannyMask.jpg", "smallDanny.png"],
          index: 0,
          page: "/members/danny/",
        },
      ],
    };
  },
  methods: {
    calculateAge: (birthYear) => {
      const age = new Date().getFullYear() - birthYear;
      return age;
    },
  },
};
</script>

<style>
.ownImg {
  transition: filter 1s ease-in-out;
}

.ownImg:hover {
  filter: brightness(1.3);
}
</style>
