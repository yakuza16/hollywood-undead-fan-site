<template>
  <Layout>
    <div class="flex flex-col justify-center place-items-center mx-4 mt-4">
      <section
        class=" mt-5 mb-32 flex flex-col justify-items-center place-content-center text-center"
      >
        <h1 class="text-2xl font-bold m-5 lg:text-4xl">
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-900"
            >Hollywood Undead music videos</span
          >
        </h1>
        <article class="my-4 text-lg lg:text-xl xl:text-2xl">
          <ul>
            <li
              v-for="page in $page.allGoogleSheet.edges"
              :key="page.node.title"
              class="my-4"
            >
              <p class="mt-8 mb-3 px-5">
                <em class="not-italic">{{ page.node.title }}</em>
              </p>
              <div class="w-full h-56 m-auto px-3 lg:h-screen py-10">
                <iframe
                  class="w-full h-full rounded-3xl border-4 border-teal-400"
                  :src="page.node.youtubeURL"
                  allowfullscreen="true"
                ></iframe>
              </div>
            </li>
          </ul>
        </article>
        <ButtonScrollTop />
      </section>
    </div>
  </Layout>
</template>

<page-query>
query {
allGoogleSheet {
  edges {
    node {
      youtubeURL
      title
    }
  }
}
}
</page-query>

<script>
import ButtonScrollTop from "../components/ButtonScrollTop";
export default {
  metaInfo: {
    title: "Hollywood Undead Music Video",
    meta: [
      {
        content:
          "Undead, Empire, Heart Of A Champion,We own the night, Day of the dead, California dreaming, Nightmare, Gravity, Hear me now, Your life, Renegade, Young",
      },
    ],
  },
  components: {
    ButtonScrollTop,
  },
};
</script>
