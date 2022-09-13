<template>
  <router-link :to="'/'">Home</router-link>
  <router-link :to="'/about'">About</router-link>
  <component :is="layout"></component>
</template>

<!--<script>-->
<!--import { computed } from 'vue';-->
<!--import { useRoute } from 'vue-router';-->
<!--import EmptyLayout from '@/layouts/EmptyLayout.vue';-->
<!--import MainLayout from '@/layouts/MainLayout.vue';-->
<!--export default {-->
<!--  components: { EmptyLayout, MainLayout },-->
<!--  setup() {-->
<!--    const route = useRoute();-->
<!--    const layout = computed(() => route.meta.layout || 'MainLayout');-->
<!--    return {-->
<!--      route,-->
<!--      layout,-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import EmptyLayout from '@/layouts/EmptyLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';
const route = useRoute();
const layout = computed(() => route.meta.layout || 'MainLayout');
</script>
