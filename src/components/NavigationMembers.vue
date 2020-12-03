<template>
  <nav class="mt-0">
    <ul
      class="lg:ml-12 lg:w-full border-2 text-lg font-bold border-teal-500 p-6 rounded-md transition duration-500 ease-in-out bg-teal-400 hover:bg-blue-400 hover:text-white"
    >
      <li
        v-for="(page, index) in pages"
        :key="index"
        class="my-2 relative ownNav"
      >
        <g-link :to="page.page">{{ page.name }}</g-link>
        <span
          class="absolute left-0 h-1 w-0 border-1 rounded-3xl bg-gradient-to-r from-teal-400 to-blue-600 ownNav__span"
        ></span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        { page: "/members/johnny-three-tears/", name: "Johnny 3 Tears" },
        { page: "/members/charlie-scene/", name: "Charlie Scene" },
        { page: "/members/j-dog/", name: "J-Dog" },
        { page: "/members/funny-man/", name: "Funny Man" },
        { page: "/members/danny/", name: "Danny" },
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
</style>
