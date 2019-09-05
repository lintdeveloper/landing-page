<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import Home from './components/home.vue';

export default {
  name: 'app',
  components: {
    Home,
  },
};
</script>

<style lang="scss">
  #app {
    margin: 0;
    padding: 0;
  }
</style>
