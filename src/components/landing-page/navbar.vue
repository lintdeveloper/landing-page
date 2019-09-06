<template>
  <div class="navbar">
    <img src="@/assets/Lafya.png" alt="Lafya Logo">
    <app-toggle
      @showNav="showNav = !showNav"
      class="toggle"
    ></app-toggle>
    <div class="navbar__links">
      <a href="#home">Home</a>
      <a href="#features">Features</a>
      <a href="#contact">Contact</a>
    </div>
    <div v-show="showNav" class="navbar__side">
      <app-toggle
        @showNav="showNav = !showNav"
        class="toggle"
      ></app-toggle>
      <a href="#home" @click="showNav = !showNav">Home</a>
      <a href="#features" @click="showNav = !showNav">Features</a>
      <a href="#contact" @click="showNav = !showNav">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showNav: false,
  }),
};
</script>

<style lang="scss" scoped>
  .navbar {
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px 20px;
    display: flex;
    z-index: 1;
    background: #fff;
    justify-content: space-between;
    align-items: center;
    @include mdl() {
      padding: 10px 80px;
      .toggle {
        display: none;
      }
    }

    img {
      width: 100px;
    }

    &__links {
      display: none;
      @include mdl() {
        display: flex;
      }
      a {
        margin-left: 30px;
      }
    }

    &__side {
      width: 200px;
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      background: $white0;
      transition: all 0.2s;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .toggle {
        position: absolute;
        right: 20px;
        top: 30px;
      }
      a {
        margin: 10px 0;
      }
    }
  }
</style>
