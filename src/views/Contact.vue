<template>
  <div class="body">
    <nav-bar :path="$route.name" />
  </div>
</template>

<script>
import NavBar from '@/components/landing-page/navbar.vue';

export default {
  components: { NavBar },
};
</script>

<style scoped lang="scss">
  .body {
    position: absolute;
    width: calc(100vw - 40px);
    @include mdl() {
      width: calc(100vw - 100px);
    }
  }
</style>
