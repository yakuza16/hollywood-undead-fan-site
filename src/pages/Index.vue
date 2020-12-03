<template>
  <Layout>
    <div class="flex flex-col justify-center place-items-center mx-4 mt-4">
      <section
        class="flex justify-center flex-wrap w-full lg:flex-col lg:place-content-center"
      >
        <g-image
          alt="Hollywood Undead"
          src="../../static/assets/hollywood-undead-sign.png"
          class="m-16 px-8 w-full lg:w-1/3 ownImg"
        />
        <g-image
          alt="Dove and grenade"
          src="../../static/assets/dove-and-grenade.png"
          class="mx-16 w-full lg:w-1/6 lg:m-auto ownImg"
        />
      </section>
      <aside class="my-2 w-full h-64 m-auto lg:w-1/3">
        <iframe
          src="https://open.spotify.com/embed/artist/0CEFCo8288kQU7mJi25s6E"
          frameborder="0"
          allowtransparency="true"
          class="w-full h-full"
        ></iframe>
      </aside>
      <article class="flex justify-center text-center mx-5 lg:w-3/4 mb-4">
        <p class="mb-24 mt-8 md:text-lg lg:text-xl">
          <strong><em>Hollywood Undead</em></strong> is an American rap rock
          band from Los Angeles, California, formed in 2005. They released their
          debut album, <strong><em>Swan Songs</em></strong
          >, on September 2, 2008, and their live CD/DVD
          <strong><em>Desperate Measures</em> </strong>, on November 10, 2009.
          Their second studio album,
          <strong><em>American Tragedy</em></strong> , was released April 5,
          2011. All of the band members use pseudonyms and previously wore their
          own unique mask, most of which were based on the common hockey
          goaltender design. The band members currently consist of
          <strong
            ><em
              >Charlie Scene, Danny, Funny Man, J-Dog, and Johnny 3 Tears</em
            ></strong
          >
          . Their third studio album, titled
          <strong><em>Notes from the Underground</em></strong> , was released on
          January 8, 2013. Their fourth studio album,
          <strong><em> Day of the Dead</em></strong
          >, was released on March 31, 2015. Hollywood Undead's fifth record is
          titled <strong><em>Five</em></strong> (or V) , and was released on
          October 27, 2017. The first single from the album, called "California
          Dreaming", was made available July 24, 2017. Their sixth studio album,
          <strong><em>New Empire, Vol. 1</em></strong
          >, was released on February 14, 2020, and the last
          <strong><em>New Empire, Vol. 2</em></strong> was released on december
          4 2020.
        </p>
      </article>
      <ButtonScrollTop class="mb-32 lg:hidden" />
    </div>
  </Layout>
</template>

<script>
import ButtonScrollTop from "../components/ButtonScrollTop";
export default {
  metaInfo: {
    title: "Hollywood Undead Fan Site Home",
  },
  components: {
    ButtonScrollTop,
  },
};
</script>

<style>
.ownImg {
  transition: 0.5s ease-in-out;
}

.ownImg:hover {
  filter: hue-rotate(360deg);
}
</style>
