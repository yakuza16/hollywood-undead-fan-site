<template>
  <header>
    <div class="flex justify-end">
      <button
        v-show="!isMenuOpen"
        @click="isMenuOpen = true"
        class="w-12 h-12 mr-4 mt-4 bg-white p-1 rounded-md"
      >
        <g-image src="../../static/assets/menu.svg" />
      </button>
    </div>
    <transition name="bounce">
      <div v-show="isMenuOpen" class="absolute top-0 left-0 w-full">
        <NavigationMenu />
        <button
          @click="isMenuOpen = false"
          class="w-12 h-12 m-4 absolute top-0 right-0 z-10 bg-white p-1 rounded-md"
        >
          <g-image src="../../static/assets/cancel.svg" />
        </button>
      </div>
    </transition>
  </header>
</template>

<script>
import NavigationMenu from "./NavigationMenu";
export default {
  components: {
    NavigationMenu,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.1s;
}
.bounce-leave-active {
  animation: bounce-in 0.1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
    transform: translateX(-100%);
    z-index: 0;
  }
  50% {
    transform: scale(0.5);
    transform: translateX(-50%);
  }
  100% {
    transform: scale(1);
    transform: translateX(0%);
    z-index: 1;
  }
}
</style>
