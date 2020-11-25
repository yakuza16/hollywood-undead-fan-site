<template>
  <Layout>
    <div class="flex flex-col justify-center place-items-center mx-4 mt-4">
      <section
        class=" mt-5 mb-32 flex flex-col justify-items-center place-content-center text-center"
      >
        <h1 class="text-2xl font-bold m-5 lg:text-4xl">
          Hollywood Undead studio albums
        </h1>
        <article class="my-4 text-lg lg:text-xl xl:text-2xl">
          <ul>
            <li
              v-for="album in albums"
              :key="album.number"
              class="my-5 border-b-4 py-3
              transition duration-500 ease-in-out hover:border-gray-900 border-opacity-50
              lg:hover:bg-blue-300 "
            >
              <p class="my-2">
                Title: <strong>{{ album.title }}</strong>
              </p>
              <p class="my-2">Number: {{ album.number }}</p>
              <div class="flex justify-center my-2">
                <g-image
                  :src="album.coverURL"
                  :alt="`${album.title} cover`"
                  class="my-2 p-4"
                />
              </div>
              <div>
                <button
                  @click="showTracks(album.number)"
                  class="px-4 py-2 w-1/2 mb-5 rounded-lg border border-gray-900 text-xl transition duration-500 ease-in-out hover:bg-blue-600 hover:text-white hover:border-white focus:bg-blue-600 focus:text-white focus:border-white lg:w-1/4"
                >
                  <span v-if="!album.isTrackListVisible">Show tracks</span>
                  <span v-else>Hide tracks</span>
                </button>
                <ul>
                  <li v-for="track in album.tracks" :key="track.track_number">
                    <div v-show="album.isTrackListVisible">
                      <p>{{ track.track_number }}. {{ track.name }}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </article>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      albums: [
        {
          isTrackListVisible: false,
          number: 1,
          title: "Swan Songs",
          releaseDate: "September 2, 2008",
          coverURL:
            "https://i.scdn.co/image/ab67616d0000b273b5aed355efcdb298fdeb7960",
          tracks: [
            {
              track_number: 1,
              name: "Undead",
            },
            {
              track_number: 2,
              name: "Sell Your Soul",
            },
            {
              track_number: 3,
              name: "Everywhere I Go",
            },
            {
              track_number: 4,
              name: "No Other Place",
            },
            {
              track_number: 5,
              name: "No. 5",
            },
            {
              track_number: 6,
              name: "Young",
            },
            {
              track_number: 7,
              name: "Black Dahlia",
            },
            {
              track_number: 8,
              name: "This Love, This Hate",
            },
            {
              track_number: 9,
              name: "Bottle And A Gun",
            },
            {
              track_number: 10,
              name: "California",
            },
            {
              track_number: 11,
              name: "City",
            },
            {
              track_number: 12,
              name: "The Diary",
            },
            {
              track_number: 13,
              name: "Pimpin'",
            },
            {
              track_number: 14,
              name: "Paradise Lost",
            },
            {
              track_number: 15,
              name: "Pain",
            },
            {
              track_number: 16,
              name: "Knife Called Lust",
            },
          ],
        },
        {
          isTrackListVisible: false,
          number: 2,
          title: "American Tragedy",
          releaseDate: "April 5, 2011",
          coverURL:
            "https://i.scdn.co/image/ab67616d0000b27342077ff75e79d3bbad43ebe2",
          tracks: [
            {
              track_number: 1,
              name: "Been To Hell",
            },
            {
              track_number: 2,
              name: "Apologize",
            },
            {
              track_number: 3,
              name: "Comin’ In Hot",
            },
            {
              track_number: 4,
              name: "My Town",
            },
            {
              track_number: 5,
              name: "I Don’t Wanna Die",
            },
            {
              track_number: 6,
              name: "Hear Me Now",
            },
            {
              track_number: 7,
              name: "Gangsta Sexy",
            },
            {
              track_number: 8,
              name: "Glory",
            },
            {
              track_number: 9,
              name: "Lights Out",
            },
            {
              track_number: 10,
              name: "Coming Back Down",
            },
            {
              track_number: 11,
              name: "Bullet",
            },
            {
              track_number: 12,
              name: "Levitate",
            },
            {
              track_number: 13,
              name: "Pour Me",
            },
            {
              track_number: 14,
              name: "Tendencies",
            },
          ],
        },
        {
          isTrackListVisible: false,
          number: 3,
          title: "Notes from the Underground",
          releaseDate: "January 8, 2013",
          coverURL:
            "https://i.scdn.co/image/ab67616d0000b27336d06886217b70a46c5c8217",
          tracks: [
            {
              track_number: 1,
              name: "Dead Bite",
            },
            {
              track_number: 2,
              name: "From The Ground",
            },
            {
              track_number: 3,
              name: "Another Way Out",
            },
            {
              track_number: 4,
              name: "Lion",
            },
            {
              track_number: 5,
              name: "We Are",
            },
            {
              track_number: 6,
              name: "Pigskin",
            },
            {
              track_number: 7,
              name: "Rain",
            },
            {
              track_number: 8,
              name: "Kill Everyone",
            },
            {
              track_number: 9,
              name: "Believe",
            },
            {
              track_number: 10,
              name: "Up In Smoke",
            },
            {
              track_number: 11,
              name: "Outside",
            },
          ],
        },
        {
          isTrackListVisible: false,
          number: 4,
          title: "Day of the Dead",
          releaseDate: "March 31, 2015",
          coverURL:
            "https://i.scdn.co/image/ab67616d0000b273b1a5454999297ac0b933efd0",
          tracks: [
            {
              track_number: 1,
              name: "Usual Suspects",
            },
            {
              track_number: 2,
              name: "How We Roll",
            },
            {
              track_number: 3,
              name: "Day Of The Dead",
            },
            {
              track_number: 4,
              name: "War Child",
            },
            {
              track_number: 5,
              name: "Dark Places",
            },
            {
              track_number: 6,
              name: "Take Me Home",
            },
            {
              track_number: 7,
              name: "Gravity",
            },
            {
              track_number: 8,
              name: "Does Everybody In The World Have To Die",
            },
            {
              track_number: 9,
              name: "Disease",
            },
            {
              track_number: 10,
              name: "Party By Myself",
            },
            {
              track_number: 11,
              name: "Live Forever",
            },
            {
              track_number: 12,
              name: "Save Me",
            },
          ],
        },
        {
          isTrackListVisible: false,
          number: 5,
          title: "Five",
          releaseDate: "July 24, 2017",
          coverURL:
            "https://i.scdn.co/image/ab67616d0000b273f7ca3f6073567209d99cfb7c",
          tracks: [
            {
              track_number: 1,
              name: "California Dreaming",
            },
            {
              track_number: 2,
              name: "Whatever It Takes",
            },
            {
              track_number: 3,
              name: "Bad Moon",
            },
            {
              track_number: 4,
              name: "Ghost Beach",
            },
            {
              track_number: 5,
              name: "Broken Record",
            },
            {
              track_number: 6,
              name: "Nobody's Watching",
            },
            {
              track_number: 7,
              name: "Renegade",
            },
            {
              track_number: 8,
              name: "Black Cadillac (feat. B-Real)",
            },
            {
              track_number: 9,
              name: "Pray (put em in the dirt)",
            },
            {
              track_number: 10,
              name: "Cashed Out",
            },
            {
              track_number: 11,
              name: "Riot",
            },
            {
              track_number: 12,
              name: "We Own The Night",
            },
            {
              track_number: 13,
              name: "Bang Bang",
            },
            {
              track_number: 14,
              name: "Your Life",
            },
          ],
        },
        {
          isTrackListVisible: false,
          isTrackListVisible: false,
          number: 6,
          title: "New Empire, Vol. 1",
          releaseDate: "February 14, 2020",
          coverURL:
            "https://i.scdn.co/image/ab67616d0000b2735b86643ed874db7cb7c8dde7",
          tracks: [
            {
              track_number: 1,
              name: "Time Bomb",
            },
            {
              track_number: 2,
              name: "Heart Of A Champion",
            },
            {
              track_number: 3,
              name: "Already Dead",
            },
            {
              track_number: 4,
              name: "Empire",
            },
            {
              track_number: 5,
              name: "Killin It",
            },
            {
              track_number: 6,
              name: "Enemy",
            },
            {
              track_number: 7,
              name: "Upside Down",
            },
            {
              track_number: 8,
              name: "Second Chances",
            },
            {
              track_number: 9,
              name: "Nightmare",
            },
          ],
        },
      ],
    };
  },
  methods: {
    showTracks(id) {
      this.albums.filter((item) =>
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
