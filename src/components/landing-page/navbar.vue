<template>
  <div class="navbar">
    <img src="@/assets/Lafya.png" alt="Lafya Logo">
    <app-toggle
      @showNav="showNav = !showNav"
      class="toggle"
    ></app-toggle>
    <div v-show="showNav" class="navbar__side">
      <app-toggle
        @showNav="showNav = !showNav"
        class="toggle"
      ></app-toggle>
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
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include mdl() {
      .toggle {
        display: none;
      }
    }

    img {
      width: 200px;
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
      .toggle {
        position: absolute;
        right: 20px;
        top: 30px;
      }
    }

  }
</style>
