<template>
  <Layout>
    <div
      class="flex flex-col justify-center place-items-center mx-4 mt-4 min-h-screen"
    >
      <header class="mb-4 w-full">
        <section class="flex flex-col place-items-center text-center">
          <NavigationMembers class="my-2 lg:mb-6 " />
          <h1 class="text-2xl font-bold">Charlie Scene</h1>
          <div
            class="flex flex-col w-3/4 md:w-1/2 lg:flex-row lg:justify-center lg:w-full"
          >
            <div class="flex justify-center mt-4 mb-4">
              <g-image
                src="../../../static/assets/Charlie_Scene_V.png"
              ></g-image>
            </div>
            <ul
              class="flex flex-col m-4 justify-center place-items-center text-xs lg:w-1/3 lg:pl-6 lg:text-sm"
            >
              <li class="w-full text-left">
                Real Name: <strong>Jordon Kristopher Terrell</strong>
              </li>
              <li class="w-full text-left">
                Stage Name:
                <strong>Charlie Scene Charles P. Scene Charlie 40 Hands</strong>
              </li>
              <li class="w-full text-left">
                Born: <em><strong> September 3, 1985</strong> </em>
              </li>
              <li class="w-full text-left">
                Family: Randi Terrell (wife) Jack Charles Terrell (son) James
                Terrell (son) Jack Terrell (father; deceased) Jane Terrell
                (mother) Jake Terrell (brother) Jesse Terrell (brother) Natalie
                Terrell (sister) Gia Terrell (niece) Adeline Terrell (niece)
              </li>
              <li class="w-full text-left">Joined: <strong>2005</strong></li>
              <li class="w-full text-left">
                Position:
                <strong>vocals guitar</strong>
              </li>
              <li class="w-full text-left">Song Count: 78</li>
            </ul>
          </div>
        </section>
      </header>
      <main
        class="mb-24 flex flex-col justify-center place-items-center text-center lg:mx-8 lg:text-left"
      >
        <h2 class="text-xl font-bold">Biography</h2>
        <article class="mb-4 mx-4 p-2">
          <h3 class="font-bold text-center my-2">Personal Background</h3>
          Jordon Terrell was born in Burbank, California on September 3, 1985.
          He knew future bandmate Funny Man from a young age, and they hung out
          very regularly growing up. Charlie is featured in almost every song
          from the band and usually raps about partying, girls, drugs, drinks
          and kicking ass, although he has also written verses about emotional,
          strong thoughts. He is classified as the "gangster" of the band. He
          appeared at the Family Values festival, which also featured Jonathan
          Davis and his band Korn. His favorite song of theirs is Bullet. He
          came with the idea in a cab when he was buying a suit for a wedding.
          Most of the members disliked it at first because it wasn't their usual
          style. His favorite song from Day of the Dead is War Child with Take
          Me Home being a close second. His favorite song from V is Broken
          Record.
        </article>
        <h4 class="text-xl font-bold">Masks</h4>
        <article class="mb-4 mx-4 p-2">
          Masks Charlie Scene's masks have never truly been "masks". Instead, he
          uses a bandana. The reason for this is because he would rather wear
          something comfortable, like cloth, than a solid mask. Hollywood Undead
          Initially, Charlie had no money for a mask so he simply wore a Del
          Taco bag as a mask with holes for eyes and sunglasses. He didn't like
          it so much because it wasn't comfortable, so he changed it later in
          time. Swan Songs Charlie wore a black bandana and sunglasses. The
          bandana had a white city style drawing with the letters "LA" stylized
          on it in the shape of an AK-47. The top of his bandana read "Charles
          P. Scene". Desperate Measures Charlie's bandana had "Charlie Scene"
          written on it instead. American Tragedy Charlie's bandana remained the
          same as the one he was wearing during Desperate Measures, only with
          inverted colors. Notes from the Underground Charlie's bandana is the
          same as the one he was wearing during Desperate Measures but the black
          is replaced with charcoal grey. Day of the Dead Charlie Scene's
          bandana looks really close to his Desperate Measures bandana. The
          image on the mask appears to be slightly different. It still features
          the AK-47 with "HU" written in it, the city seems to be in ruins,
          similar to the Day of the Dead single cover, and a thick cloud of
          smoke is drifting above it. The color of the bandana is black, instead
          of grey. V Charlie still wears a bandana, but this time without
          images. He no longer has his name on top. On top he has the word
          Hollywood with his name under it, now being broken up in two lines but
          retaining the previously used font. Under his name, he has "LA"
          written stylized with the two letters merging into each other. Charlie
          has a black bandana with golden letters, a blue bandana with silver
          letters, and a red bandana with white letters.
        </article>
        <ButtonScrollTop />
      </main>
    </div>
  </Layout>
</template>

<script>
import NavigationMembers from "../../components/NavigationMembers";
import ButtonScrollTop from "../../components/ButtonScrollTop";

export default {
  components: {
    NavigationMembers,
    ButtonScrollTop,
  },
};
</script>

<style>
body {
  min-height: 100vh;
}
</style>
