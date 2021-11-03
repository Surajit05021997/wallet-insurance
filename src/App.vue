<template>
  <div id="app">
    <app-navbar></app-navbar>
    <hero-header></hero-header>
    <app-feature></app-feature>
    <app-plans></app-plans>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';
import HeroHeader from '@/components/HeroHeader.vue';
import AppFeature from '@/components/AppFeature.vue';
import AppPlans from '@/components/AppPlans.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    HeroHeader,
    AppFeature,
    AppPlans,
    AppFooter,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-weight: 400;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
