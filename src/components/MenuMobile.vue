<template>
  <header class="m-4">
    <div class="flex justify-end">
      <button
        v-show="!isMenuOpen"
        @click="isMenuOpen = true"
        class="menu w-12 h-12"
      ></button>
    </div>
    <transition name="fade">
      <div v-show="isMenuOpen" class="absolute top-0 left-0 w-full">
        <NavigationMenu />
        <button
          @click="isMenuOpen = false"
          class="close w-12 h-12 m-4 absolute bottom-0 right-0"
        ></button>
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
.menu {
  background-image: url("../../static/assets/menu.svg");
  background-size: 100%;
}

.close {
  background-image: url("../../static/assets/cancel.svg");
  background-size: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
