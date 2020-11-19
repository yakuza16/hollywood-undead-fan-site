<template>
  <Layout>
    <section class="flex justify-center flex-wrap w-full">
      <g-image
        alt="Example image"
        src="../../static/assets/hollywood-undead-sign.png"
        class="m-16 px-8 w-full"
      />
      <div class="pic">
        <!-- <g-image
          alt="Example image"
          src="../../static/assets/dove-and-grenade.png"
          class="mx-16 w-full h-auto"
        /> -->
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hollywood Undead Polska",
  },
};
</script>

<style>
.pic {
  width: 600px;
  height: 250px;
  background: url("../../static/assets/dove-and-grenade.png") no-repeat center;
  background-size: contain;
  cursor: pointer;
}
</style>
