<template>
  <nav>
    <ul>
      <li v-for="(page, index) in pages" :key="index">
        <g-link :to="page.page">{{ page.name }}</g-link>
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

<style></style>
