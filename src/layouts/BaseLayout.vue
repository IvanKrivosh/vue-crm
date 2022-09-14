<template>
  <component v-if="layout" :is="layout">
    <router-view></router-view>
  </component>
</template>

<script setup>
const modules = {
  EmptyLayout: import.meta.glob('@/layouts/EmptyLayout.vue', {
    import: 'default',
  }),
  MainLayout: import.meta.glob('@/layouts/MainLayout.vue', {
    import: 'default',
  }),
};
import { markRaw, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const layout = ref();
const route = useRoute();
watch(
  route,
  async ({ meta }) => {
    try {
      if (meta.layout)
        Object.entries(modules[meta.layout])[0][1]().then(component => {
          layout.value = markRaw(component);
        });
    } catch (e) {
      console.log(e);
      layout.value = markRaw(null);
    }
  },
  { immediate: true },
);
</script>
