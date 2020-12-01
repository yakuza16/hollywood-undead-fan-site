<template>
  <Layout>
    <div
      class="flex flex-col justify-center place-items-center mx-4 mt-4 h-full"
    >
      <section
        class=" mt-5 mb-32 flex flex-col justify-items-center place-content-center text-center"
      >
        <h1 class="text-2xl font-bold m-5 lg:text-6xl">
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-900"
            >ERROR 404 - Page not found</span
          >
        </h1>
        <div>
          <p class="text-2xl my-12">
            Use the navigation menu or click below button to go to Home Page
          </p>
          <g-link
            to="/"
            class="text-3xl border-2 border-black px-4 py-2 my-4 font-bold rounded-md transition duration-300 ease-in-out bg-teal-200 text-gray-900 hover:text-white hover:bg-teal-400"
          >
            Home Page
          </g-link>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {};
</script>

<style>
body {
  min-height: 100vh;
}
</style>
