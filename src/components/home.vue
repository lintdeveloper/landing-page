<template>
  <div class="body">
    <nav-bar />
    <header-section id="home" />
    <block-chain />
    <customer />
    <hcp id="features" />
    <providers />
    <contact id="contact" />
  </div>
</template>

<script>
import NavBar from '@/components/landing-page/navbar.vue';
import HeaderSection from '@/components/landing-page/header-section.vue';
import BlockChain from '@/components/landing-page/blockchain.vue';
import Customer from '@/components/landing-page/customer.vue';
import Hcp from '@/components/landing-page/healthcare-provider.vue';
import Providers from '@/components/landing-page/providers.vue';
import Contact from '@/components/landing-page/contact.vue';

export default {
  components: {
    NavBar,
    HeaderSection,
    Hcp,
    BlockChain,
    Providers,
    Customer,
    Contact,
  },
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
