<template>
  <div class="home">
    <hero-header></hero-header>
    <app-feature></app-feature>
    <app-plans></app-plans>
    
  </div>
</template>

<script>
import HeroHeader from '@/components/HeroHeader.vue';
import AppFeature from '@/components/AppFeature.vue';
import AppPlans from '@/components/AppPlans.vue';

export default {
  name: 'Home',
  components: {
    HeroHeader,
    AppFeature,
    AppPlans,
  }
}
</script>
