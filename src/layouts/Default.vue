<template>
  <div>
    <header>
      <nav class="bg-gradient-to-r from-teal-300 to-blue-600 py-4">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/hollywood/">Hollywood</g-link>
      </nav>
    </header>
    <slot />
    <footer class="bg-gray-400 absolute bottom-0 w-full flex justify-center">
      Footer
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}
</style>
