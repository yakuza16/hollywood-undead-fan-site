<template>
  <Layout>
    <div class="flex flex-col justify-center place-items-center mx-4 mt-4">
      <section
        class="w-full flex flex-col justify-items-center place-content-center text-center"
      >
        <h1 class="text-xl">
          Hollywood Undead band members
        </h1>
        <article class="my-4">
          <ul>
            <li v-for="member in bandMembers" :key="member.pseudonim">
              <p>Stage name:{{ member.pseudonim }}</p>
              <p>Real name: {{ member.realName }}</p>
              <p>Age: {{ member.age }}</p>
              <div class="w-full h-screen"></div>
            </li>
          </ul>
        </article>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hollywood Undead Band Members",
  },
  data() {
    return {
      bandMembers: [
        {
          pseudonim: "Johnny 3 Tears",
          maskImage: "../../static/masks/JohhnyMask.jpg",
          realName: "George Arthur Ragan",
          age: new Date().getFullYear() - 1981,
        },
        {
          pseudonim: "Charlie Scene",
          maskImage: "../../static/masks/charlieMask.jpg",
          realName: "Jordon Kristopher Terrell",
          age: new Date().getFullYear() - 1985,
        },
        {
          pseudonim: "J-Dog",
          maskImage: "../../static/masks/JdogMask.jpg",
          realName: "Jorel Decker",
          age: new Date().getFullYear() - 1984,
        },
        {
          pseudonim: "Funny Man",
          maskImage: "../../static/masks/funnyMask.jpg",
          realName: "Dylan Alvarez",
          age: new Date().getFullYear() - 1986,
        },
        {
          pseudonim: "Danny",
          maskImage: "../../static/masks/DannyMask.jpg",
          realName: "Daniel Rose Murillo",
          age: new Date().getFullYear() - 1982,
        },
      ],
    };
  },
};
</script>
