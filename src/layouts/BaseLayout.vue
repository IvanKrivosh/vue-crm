<template>
  <component :is="layout"></component>
</template>

<script setup>
import EmptyLayout from '@/layouts/EmptyLayout.vue';
import { markRaw, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const layout = ref();
const route = useRoute();
watch(
  route,
  async ({ meta }) => {
    try {
      const component = meta.layout && (await import(`./${meta.layout}.vue`));
      layout.value = markRaw(component?.default || EmptyLayout);
    } catch (e) {
      layout.value = markRaw(EmptyLayout);
    }
  },
  { immediate: true },
);
</script>
