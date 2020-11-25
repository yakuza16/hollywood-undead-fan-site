<template>
  <Layout>
    <div class="flex flex-col justify-center place-items-center mx-4 mt-4">
      <ImagesCarousel />
      <section
        class=" mt-5 mb-32 flex flex-col justify-items-center place-content-center text-center"
      >
        <h1 class="text-2xl font-bold m-5 lg:text-4xl">
          Hollywood Undead band members
        </h1>
        <article class="my-4 text-lg lg:text-xl xl:text-2xl">
          <ul>
            <li
              v-for="member in bandMembers"
              :key="member.pseudonim"
              class="my-5 border-b-4 py-3
                transition duration-500 ease-in-out hover:border-gray-900 border-opacity-50
              lg:hover:bg-blue-300 "
            >
              <p class="my-3">
                Stage name: <strong>{{ member.pseudonim }}</strong>
              </p>
              <p class="my-3">Real name: {{ member.realName }}</p>
              <p class="my-3">Age: {{ member.age }}</p>
              <div class="flex justify-center my-5">
                <g-image
                  :src="
                    require('!!assets-loader!~/assets/masks/' +
                      member.maskImage)
                  "
                  :alt="member.pseudonim"
                  class="my-4 rounded-full border-gray-900 border-4 border-opacity-75"
                />
              </div>
            </li>
          </ul>
        </article>
      </section>
    </div>
  </Layout>
</template>

<script>
import ImagesCarousel from "../components/ImagesCarousel";
export default {
  components: {
    ImagesCarousel,
  },
  metaInfo: {
    title: "Hollywood Undead Band Members",
  },
  data() {
    return {
      bandMembers: [
        {
          pseudonim: "Johnny 3 Tears",
          maskImage: "JohhnyMask.jpg",
          realName: "George Arthur Ragan",
          age: this.calculateAge(1981),
        },
        {
          pseudonim: "Charlie Scene",
          maskImage: "charlieMask.jpg",
          realName: "Jordon Kristopher Terrell",
          age: this.calculateAge(1985),
        },
        {
          pseudonim: "J-Dog",
          maskImage: "JdogMask.jpg",
          realName: "Jorel Decker",
          age: this.calculateAge(1984),
        },
        {
          pseudonim: "Funny Man",
          maskImage: "funnyMask.jpg",
          realName: "Dylan Alvarez",
          age: this.calculateAge(1986),
        },
        {
          pseudonim: "Danny",
          maskImage: "DannyMask.jpg",
          realName: "Daniel Rose Murillo",
          age: this.calculateAge(1982),
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
