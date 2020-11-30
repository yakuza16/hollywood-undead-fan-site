<template>
  <nav
    class="relative z-10 text-xl bg-gradient-to-r from-teal-300 to-blue-600 py-4 sm:h-screen lg:h-full"
  >
    <ul class="flex flex-col ml-4 place-items-center lg:flex-row">
      <li
        v-for="page in routesPages"
        :key="page.name"
        class="my-4 mx-4 relative ownNav"
      >
        <g-link :to="page.path" class="nav__link">{{ page.name }}</g-link>
        <span
          class="absolute left-0 h-1 w-0 border-1 rounded-3xl bg-gradient-to-r from-teal-400 to-blue-600 ownNav__span"
        ></span>
      </li>
      <DarkMode class="ml-20"></DarkMode>
    </ul>
  </nav>
</template>

<script>
import DarkMode from "vue-dark-mode-switcher";
export default {
  components: {
    DarkMode,
  },
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

<style>
.ownNav__span {
  transition: width 0.3s;
  bottom: -8px;
}

.ownNav:hover .ownNav__span {
  width: 80%;
}

.theme-dark {
  background: rgba(0, 0, 0, 0.863);
  color: white;
}
</style>
