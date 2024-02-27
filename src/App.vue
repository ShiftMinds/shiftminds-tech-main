<template>
  <div id="app">
    <header-navigation />

    <transition name="opaque">
      <router-view />
    </transition>

    <footer-navigation />

    <div class="position-fixed bottom-0 end-0 p-3 p-md-4" style="z-index: 100">
      <a href="#" class="btn btn-primary btn-icon btn-icon-lg rounded-circle">
        <i class="far fa-envelope-open fa-lg"></i>
      </a>
    </div>
  </div>
</template>

<script>
import HeaderNavigation from "./components/HeaderNavigation.vue";
import FooterNavigation from "./components/FooterNavigation.vue";

export default {
  name: "App",
  components: {
    HeaderNavigation,
    FooterNavigation,
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: ease 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
