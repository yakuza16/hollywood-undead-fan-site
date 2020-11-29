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
            <li v-for="(video, index) in musicVideos" :key="index" class="my-4">
              <p class="mt-8 mb-3 px-5">
                <em class="not-italic">{{ video.title }}</em>
              </p>
              <div class="w-full h-56 m-auto px-3 lg:h-screen py-10">
                <iframe
                  class="w-full h-full rounded-3xl border-4 border-teal-400"
                  :src="video.youtubeURL"
                  allowfullscreen="true"
                ></iframe>
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
  metaInfo: {
    title: "Hollywood Undead Music Videos",
  },
  data() {
    return {
      musicVideos: [
        {
          youtubeURL: "https://www.youtube.com/embed/Adwl0y3qKUI",
          title:
            "Hollywood Undead - Heart Of A Champion feat. Papa Roach & Ice Nine Kills (Official Video)",
        },
        {
          youtubeURL: "https://www.youtube.com/embed/AOG-b2fTxTU",
          title: "Hollywood Undead - Empire (Official Video)",
        },
        {
          youtubeURL: "https://www.youtube.com/embed/uQw6LHv46Pk",
          title: "Undead - Broadcast Version",
        },

        {
          youtubeURL: "https://www.youtube.com/embed/lJyxWQPHotw",
          title: "Hollywood Undead - We Own The Night",
        },

        {
          youtubeURL: "https://www.youtube.com/embed/bl0e5DrYLyY",
          title: "Hollywood Undead - Day Of The Dead (Official Music Video)",
        },

        {
          youtubeURL: "https://www.youtube.com/embed/jjjaU5kQV8k",
          title: "Hollywood Undead - California Dreaming (Official Video)",
        },

        {
          youtubeURL: "https://www.youtube.com/embed/W_2n7zU5K4w",
          title: "Hollywood Undead - Nightmare (Official Music Video)",
        },

        {
          youtubeURL: "https://www.youtube.com/embed/yjREC9hg6bU",
          title: "Hollywood Undead - Gravity (Official Music Video)",
        },

        {
          youtubeURL: "https://www.youtube.com/embed/pdoIs1jZbCY",
          title: "Hollywood Undead - Hear Me Now (Official Video)",
        },

        {
          youtubeURL: "https://www.youtube.com/embed/V5XOwWOAQBQ",
          title: "Hollywood Undead - Your Life (Official Video)",
        },

        {
          youtubeURL: "https://www.youtube.com/embed/U1wKDlVzgUY",
          title: "Hollywood Undead - Renegade (Official Video)",
        },

        {
          youtubeURL: "https://www.youtube.com/embed/R_HHm9ki3JI",
          title: "Hollywood Undead - Young (Official Video)",
        },
      ],
    };
  },
};
</script>
