<template>
  <div class="navbar">
    <router-link to="/">
      <img src="@/assets/Lafya.png" alt="Lafya Logo">
    </router-link>
    <app-toggle
      @showNav="showNav = !showNav"
      class="toggle"
    ></app-toggle>
    <div class="navbar__links">
      <router-link
        :class="path == 'home' ?'home':''"
        to="/"
        v-scroll-to="'#home'"
      >Home</router-link>
      <router-link
        v-show="path == 'home'"
        to="/"
        v-scroll-to="'#features'"
      >Features</router-link>
      <router-link
        to="contact"
        :class="path == 'contact' ?'home':''"
      >Contact</router-link>
    </div>
    <div v-show="showNav" class="navbar__side">
      <app-toggle
        @showNav="showNav = !showNav"
        class="toggle"
      ></app-toggle>
      <router-link
        :class="path == 'home' ?'home':''"
        to="/"
        v-scroll-to="'#home'"
      >Home</router-link>
      <router-link
        v-show="path == 'home'"
        to="/"
        v-scroll-to="'#features'"
      >Features</router-link>
      <router-link
        to="contact"
        :class="path == 'contact' ?'home':''"
      >Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['path'],
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
        &.home,
        &.contact {
          color: $primary;
        }
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
        top: 25px;
      }
      a {
        margin: 10px 0;
      }
    }
  }
</style>
