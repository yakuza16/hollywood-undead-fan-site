<template>
  <nav
    class="relative z-10 text-xl bg-gradient-to-r from-teal-300 to-blue-600 py-4 sm:h-screen lg:h-full"
  >
    <ul class="flex flex-col text-letf ml-4 lg:flex-row ">
      <li
        v-for="page in routesPages"
        :key="page.name"
        class="my-4 mx-4 hover:underline"
      >
        <g-link :to="page.path" class="nav__link">{{ page.name }}</g-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      routesPages: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Members",
          path: "/members/",
        },
        {
          name: "Albums",
          path: "/albums/",
        },
        {
          name: "Videos",
          path: "/videos/",
        },
      ],
    };
  },
};
</script>

<style></style>
