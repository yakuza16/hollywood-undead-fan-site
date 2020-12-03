<template>
  <Layout>
    <div
      class="flex flex-col justify-center place-items-center mx-4 mt-4 min-h-screen"
    >
      <header class="mb-4 w-full">
        <section class="flex flex-col place-items-center text-center">
          <NavigationMembers class="my-2 lg:mb-6 " />
          <h1 class="text-2xl font-bold">Danny</h1>
          <div
            class="flex flex-col w-3/4 md:w-1/2 lg:flex-row lg:justify-center lg:w-full"
          >
            <div class="flex justify-center mt-4 mb-4">
              <g-image src="../../../static/assets/Danny_V.png"></g-image>
            </div>
            <ul
              class="flex flex-col m-4 justify-center place-items-center text-xs lg:w-1/3 lg:pl-6 lg:text-sm"
            >
              <li class="w-full text-left">
                Real Name: <strong>Daniel Rose Murillo</strong>
              </li>
              <li class="w-full text-left">
                Stage Name: <strong>Danny</strong>
              </li>
              <li class="w-full text-left">
                Born: <em><strong>November 21, 1982</strong> </em>
              </li>
              <li class="w-full text-left">
                Family: Theresa "Reese" Murillo (wife) Scarlett Eve Murillo
                (daughter) Roman Blue Murillo (son) Margo Murillo (mother) Rigo
                Murillo (brother) Rueben Murillo (brother)
              </li>
              <li class="w-full text-left">Joined: <strong>2009</strong></li>
              <li class="w-full text-left">
                Position:
                <strong
                  >clean vocals, vocals, backing vocals keyboards (since 2011)
                  rhythm guitar (since 2013)</strong
                >
              </li>
              <li class="w-full text-left">Song Count: 75</li>
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
          Danny is one of the current vocalists for Hollywood Undead, replacing
          Deuce since early 2010. He began to tour with them prior to his
          official introduction to the band in mid-2008, filling in for Deuce
          while he was absent. He has stated that his top three songs off of
          American Tragedy are My Town, Hear Me Now, and, I Don't Wanna Die.
          However, he said it was hard to decide as he loves all of the songs.
          His favorite song from Day of the Dead is War Child, mostly because of
          the live performances. His favorite song from V is Ghost Beach.
        </article>
        <h4 class="text-xl font-bold">Masks</h4>
        <article class="mb-4 mx-4 p-2">
          Desperate Measures Danny was touring with the band since mid-2008. On
          tours, he wore two gold masks with black paint splatter on it.
          American Tragedy When he joined the band, Danny's mask was metallic
          gold with a Latin cross on the left eye. The right side of the mouth
          also had a small, hardly noticeable grin. Notes from the Underground
          Danny's mask is similar to his old mask. It's still gold but less
          metallic. The Latin cross appears to be inverted and is made of bullet
          casings. The bullets are 6.5 Grendel. The darkening splatter has
          returned and it varies in color. The right side of the mouth still has
          the grin, but it's more noticeable now. Day of the Dead Danny's mask
          is now covered with a golden chainmail making it hard to distinguish
          its facial features. Underneath the chainmail, the mask is black with
          a cross painted with bright gold around its left eye. The molding
          seems to be less angular and more rounded compared to the previous
          mask, although the mouth is hard to see, it also retains some of its
          aesthetic features. The strap used to fasten it to Danny's head also
          seems to have a chainmail aesthetic. It also seems that the mask
          represents a burlap sack that was used to put on somebody's head
          before execution. V Like most members of the band, Danny has also
          replaced his mask with a chrome one. The mask has one color and
          retains his signature smirk. The cross is no longer a physical
          attachment to the mask and is instead painted on and designed to look
          like graffiti. Danny has a golden mask with a black cross, a silver
          mask with a blue cross, and a red mask with a white cross.
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
