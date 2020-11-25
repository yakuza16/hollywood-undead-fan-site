<template>
  <nav
    class=" text-xl bg-gradient-to-r from-teal-300 to-blue-600 py-4 h-screen sm:h-full"
  >
    <ul class="flex flex-col text-letf ml-4 lg:flex-row">
      <li class="my-4 mx-4 "><g-link class="nav__link" to="/">Home</g-link></li>
      <li class="my-4 mx-4">
        <g-link class="nav__link" to="/members/">Members</g-link>
      </li>
      <li class="my-4 mx-4">
        <g-link class="nav__link" to="/albums/">Albums</g-link>
      </li>
      <li class="my-4 mx-4">
        <g-link class="nav__link" to="/videos/">Videos</g-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
