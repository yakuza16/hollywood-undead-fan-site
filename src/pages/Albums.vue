<template>
  <Layout>
    <div class="flex flex-col justify-center place-items-center mx-4 mt-4">
      <section
        class=" mt-5 mb-32 flex flex-col justify-items-center place-content-center text-center"
      >
        <h1 class="text-2xl font-bold m-5 lg:text-4xl">
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-900"
            >Hollywood Undead studio albums</span
          >
        </h1>
        <article class="my-4 text-lg lg:text-xl xl:text-2xl">
          <ul>
            <li
              v-for="page in $page.allAlbums.edges[0].node.albums"
              :key="page.number"
              class="my-5 border-b-4 py-3 rounded-xl
              transition duration-500 ease-in-out hover:border-gray-900 border-opacity-50
              lg:hover:bg-blue-300 "
            >
              <p class="my-2">
                Title: <strong>{{ page.title }}</strong>
              </p>
              <p class="my-2">Number: {{ page.number }}</p>
              <div class="flex justify-center my-2">
                <g-image
                  :src="page.coverURL"
                  :alt="`${page.title} cover`"
                  class="my-2 p-4"
                />
              </div>
              <div>
                <button
                  @click="showTracks(page.number)"
                  class="px-4 py-2 w-1/2 mb-5 rounded-lg border border-gray-900 text-xl transition duration-500 ease-in-out hover:bg-blue-600 hover:text-white hover:border-white focus:bg-blue-600 focus:text-white focus:border-white lg:w-1/4"
                >
                  <span v-if="!page.isTrackListVisible">Show tracks</span>
                  <span v-else>Hide tracks</span>
                </button>
                <ul>
                  <li v-for="track in page.tracks" :key="track.track_number">
                    <div v-show="page.isTrackListVisible">
                      <p>{{ track.track_number }}. {{ track.name }}</p>
                    </div>
                  </li>
                </ul>
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
allAlbums {
  edges {
    node {
      albums {
        isTrackListVisible
        number
        title
        releaseDate
        coverURL
        tracks {
          track_number
          name
        }
      }
    }
  }
}
}
</page-query>

<script>
import ButtonScrollTop from "../components/ButtonScrollTop";
export default {
  metaInfo: {
    title: "Hollywood Undead Albums",
    meta: [
      {
        content:
          "Swan Songs, American Tragedy, Day of the dead, Notes from the underground, New Empire vol. 1, New Empire vol. 2",
      },
    ],
  },
  components: {
    ButtonScrollTop,
  },
  methods: {
    showTracks(id) {
      this.$page.allAlbums.edges[0].node.albums.filter((item) =>
        item.number === id && item.isTrackListVisible === false
          ? (item.isTrackListVisible = true)
          : item.number === id && item.isTrackListVisible === true
          ? (item.isTrackListVisible = false)
          : null
      );
    },
  },
};
</script>

<style></style>
