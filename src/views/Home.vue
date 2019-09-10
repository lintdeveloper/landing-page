<template>
  <div class="body">
    <nav-bar :path="$route.name" />
    <header-section id="home" />
    <customer />
    <hcp id="features" />
    <providers />
    <block-chain />
    <modern-tech />
    <pricing />
    <contact id="contact" />
    <app-footer />
  </div>
</template>

<script>
import NavBar from '@/components/landing-page/navbar.vue';
import HeaderSection from '@/components/landing-page/header-section.vue';
import ModernTech from '@/components/landing-page/modern-tech.vue';
import BlockChain from '@/components/landing-page/blockchain.vue';
import Customer from '@/components/landing-page/customer.vue';
import Hcp from '@/components/landing-page/healthcare-provider.vue';
import Providers from '@/components/landing-page/providers.vue';
import Pricing from '@/components/landing-page/pricing.vue';
import Contact from '@/components/landing-page/contact.vue';
import AppFooter from '@/components/landing-page/footer.vue';

export default {
  components: {
    NavBar,
    HeaderSection,
    Hcp,
    BlockChain,
    Providers,
    Pricing,
    Customer,
    Contact,
    ModernTech,
    AppFooter,
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
